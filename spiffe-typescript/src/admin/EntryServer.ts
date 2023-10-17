import {AdminClient} from './AdminClient';
import { JwtSvid, X509Svid } from "../svid";
import {Entry} from '../proto/private/spire/api/types/entry';
import {Selector} from '../proto/private/spire/api/types/selector';
import {
  BatchCreateEntryRequest,
  GetEntryRequest,
} from '../proto/private/spire/api/server/entry';
import {SpiffeId} from '../spiffeid';
import {SPIFFEID} from '../proto/private/spire/api/types/spiffeid';
import {IdentityClient} from '../delegated_identity';
import {FetchJWTSVIDsRequest} from '../proto/private/spire/api/agent/delegatedidentity';
import {v4 as uuidv4} from 'uuid';
import {AdminConfig} from '../config';
import {X509SVIDRequest} from '../proto/public/workload';
import {WorkloadClient} from '../workloadapi';
import {SpiffeJwtPayload} from './SpiffeJwtPayload';
import { Logger } from '../internal/Logger';

export class EntryServer {
  constructor(
    adminClient: AdminClient,
    identityClient: IdentityClient,
    workloadClient: WorkloadClient,
    config: AdminConfig
  ) {
    this.adminClient = adminClient;
    this.identityClient = identityClient;
    this.workloadClient = workloadClient;

    this.config = config;
  }

  private logger = new Logger(EntryServer);
  private adminClient: AdminClient;
  private identityClient: IdentityClient;
  private workloadClient: WorkloadClient;
  private config: AdminConfig;

  // Creates a new Entry on the Spire server, and returns a JWTSvid
  public async registerUser(jwtPayload: SpiffeJwtPayload): Promise<JwtSvid> {
    await this.requestx509Svid();

    const entry = this.generateEntry(jwtPayload.spiffeId);
    const request: BatchCreateEntryRequest = {
      entries: [],
    };
    request.entries.push(entry);

    const resp = await this.adminClient.batchCreateEntry(request);

    if (resp) {
      const results = resp.results;
      const result = results.pop();
      if (
        result &&
        result.entry &&
        (result.status?.code === 0 || result.status?.code === 6) // 6 similar entry already exists
      ) {
        const fetchedEntry = await this.retrieveEntryWithBackoff(result.entry.id)
        if (fetchedEntry) {
          const jwt = await this.retrieveJwtWithBackoff(jwtPayload);
          if (jwt) return jwt;

          if (!jwt) {
            throw new Error('no response when trying to get a JWT');
          }
        }
        throw new Error('no response when trying to fetch the registered entry');
      } else if (result) {
        throw new Error(result.status?.code + ':' + result.status?.message);
      } else {
        throw new Error('unable to register entry');
      }
    }
    throw new Error('no response when trying to register entry');
  }

  private async retrieveEntryWithBackoff(
    entryId: string
  ): Promise<Entry | undefined> {
    const maxRetries = 5;
    let retryCount = 0;
    let delay = 1000; // start with a 1-second delay

    while (retryCount < maxRetries) {
      try {
        return await this.retrieveEntry(entryId); // If successful, return the result
      } catch (error) {
        this.logger.info(
          `RetrieveEntry: Attempt ${retryCount + 1} failed. Retrying in ${delay}ms.`
        );
        await new Promise(resolve => setTimeout(resolve, delay));
        delay *= 2; // Double the delay for the next iteration
        retryCount++;
      }
    }

    this.logger.info('Max retries reached. Giving up.');
    return undefined;
  }

  private async retrieveJwtWithBackoff(
    jwtPayload: SpiffeJwtPayload
  ): Promise<JwtSvid | undefined> {
    const maxRetries = 5;
    let retryCount = 0;
    let delay = 1000; // start with a 1-second delay

    while (retryCount < maxRetries) {
      try {
        return await this.requestJwt(jwtPayload.spiffeId, jwtPayload.audience);
      } catch (error) {
        this.logger.info(
          `RetrieveJWT: Attempt ${retryCount + 1} failed. Retrying in ${delay}ms.`
        );
        await new Promise(resolve => setTimeout(resolve, delay));
        delay *= 2; // Double the delay for the next iteration
        retryCount++;
      }
    }

    this.logger.info('Max retries reached. Giving up.');
    return undefined;
  }

  private async retrieveEntry(entryId: string) {
    this.logger.info('fetching entry with id ' + entryId)
    const getEntryRequest: GetEntryRequest = {id: entryId};
    return await this.adminClient.getEntry(getEntryRequest);
  }
  private generateEntry(spiffeId: string) {
    const entry: Entry = {
      id: uuidv4(),
      selectors: this.getSelectors(spiffeId),
      x509SvidTtl: 0,
      federatesWith: [],
      admin: false,
      downstream: false,
      expiresAt: this.getExpiry(),
      dnsNames: [],
      revisionNumber: 0n,
      storeSvid: false,
      jwtSvidTtl: 0,
      hint: '',
      createdAt: 0n,
      spiffeId: this.getSpiffeid(spiffeId),
      parentId: this.getSpiffeid(this.config.parentSpiffeId),
    };

    this.logger.debug(entry);
    return entry;
  }

  private getSpiffeid(spiffeId: string) {
    const parsedSid = SpiffeId.parse(spiffeId);
    const sid: SPIFFEID = {
      trustDomain: parsedSid.getTrustDomain().toString(),
      path: parsedSid.getPath(),
    };

    return sid;
  }

  private getSelectors(spiffeId: string) {
    const selectorEntry: Selector = {
      type: 'spiffe_id',
      value: spiffeId,
    };

    const selectorOIDC: Selector = {
      type: 'spiffe_id',
      value: this.config.adminSpiffeId,
    };

    return [selectorEntry, selectorOIDC];
  }

  async requestx509Svid(): Promise<void> {
    const request: X509SVIDRequest = {};

    for await (const message of this.workloadClient.fetchX509SVID(request)) {
      const svids = message.svids;
      for (const svidsKey in svids) {
        if (svids[svidsKey].spiffeId == this.config.adminSpiffeId) {

          this.adminClient.setX509(await X509Svid.getX509Svid(svids[svidsKey]));
          break;
        }
      }
      break;
    }
  }

  async requestJwt(spiffeId: string, audience: string[]): Promise<JwtSvid> {
    const request: FetchJWTSVIDsRequest = {
      audience: audience,
      selectors: this.getSelectors(spiffeId),
    };

    this.logger.debug(request);
    const response = await this.identityClient.fetchJWTSVIDsRequest(request);
    let jwt;
    if (response) jwt = response.svids.pop();

    if (jwt) {
      return new JwtSvid(jwt.token);
    } else {
      throw new Error('unable to obtain jwt svid');
    }
  }

  private getExpiry(): bigint {
    const now = new Date();
    const hoursToAdd: number = +this.config.JwtTTL;
    const ttlHours = new Date(now.getTime() + hoursToAdd + 60 * 60 * 1000); // Adding 1 hour in milliseconds
    return BigInt(Math.floor(ttlHours.getTime() / 1000));
  }
}
