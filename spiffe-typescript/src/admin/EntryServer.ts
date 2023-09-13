import { AdminClient } from "./AdminClient";
import { JwtSvid } from "../svid";
import { Entry } from "../proto/spire/api/types/entry_pb";
import { Selector } from "../proto/spire/api/types/selector_pb";
import { BatchCreateEntryRequest } from "../proto/spire/api/server/entry_pb";
import { SpiffeId } from "../spiffeid";
import { SPIFFEID } from "../proto/spire/api/types/spiffeid_pb";
import { IdentityClient } from "../delegated_identity/IdentityClient";
import { FetchJWTSVIDsRequest } from "../proto/spire/api/agent/delegatedidentity_pb";
import { v4 as uuidv4 } from "uuid";
import { AdminConfig } from "../config";
import { X509SVIDRequest, X509SVIDResponse } from "../proto/spire/workload_pb";
import { WorkloadClient } from "../workloadapi/WorkloadClient";
import { SpiffeJwtPayload } from "./SpiffeJwtPayload";


export class EntryServer{

  constructor(adminClient: AdminClient, identityClient: IdentityClient, workloadClient: WorkloadClient, config: AdminConfig) {
    this.adminClient = adminClient;
    this.identityClient = identityClient;
    this.workloadClient = workloadClient;

    this.config = config;
  }

  private adminClient: AdminClient;
  private identityClient: IdentityClient;
  private workloadClient: WorkloadClient;
  private config: AdminConfig;

  // Creates a new Entry on the Spire server, and returns a JWTSvid
  public async registerUser(spiffePermission: SpiffeJwtPayload) : Promise<JwtSvid>{

    await this.requestx509Svid();


    const entry = this.generateEntry(spiffePermission.spiffeId);
    const request = new BatchCreateEntryRequest()
    request.addEntries(entry)

    const resp = await this.adminClient.batchCreateEntry(request)
    const results = resp.getResultsList()
    const result = results.pop();
    if(result && result.hasEntry() && (result.getStatus()?.getCode() === 0 || result.getStatus()?.getCode() === 6)){ // 6 similar entry already exists
      return await this.requestJwt(spiffePermission.spiffeId, spiffePermission.audience)
    }

    else if (result){
      throw new Error(result.getStatus()?.getCode() +":"+result.getStatus()?.getMessage())
    }
    else {
      throw new Error("unable to register entry")
    }
  }

  private generateEntry(spiffeId: string) {
    const entry = new Entry();
    entry.setAdmin(false);
    entry.setId(uuidv4());
    entry.setSpiffeId(this.getSpiffeid(spiffeId));
    entry.setParentId(this.getSpiffeid(this.config.parentSpiffeId));
    entry.setSelectorsList(this.getSelectors(spiffeId));
    entry.setExpiresAt(this.getExpiry())
    console.log(entry)
    return entry;
  }

  private getSpiffeid(spiffeId: string) {
    const sid =  new SPIFFEID();
    const parsedSid = SpiffeId.parse(spiffeId);

    sid.setTrustDomain(parsedSid.getTrustDomain().toString())
    sid.setPath(parsedSid.getPath())
    return sid;
  }

  private getSelectors(spiffeId: string) {
    const selectorEntry = new Selector()
    selectorEntry.setType("spiffe_id");
    selectorEntry.setValue(spiffeId)
    const selectorOIDC = new Selector()
    selectorOIDC.setType("spiffe_id");
    selectorOIDC.setValue(this.config.adminSpiffeId)
    return [selectorEntry, selectorOIDC];
  }


  async requestx509Svid() : Promise<void>{
    const request = new X509SVIDRequest()

    for await (const message of this.workloadClient.fetchX509SVID(request)) {
      const svids =  message.getSvidsList();
      for (const svidsKey in svids) {
        if ( svids[svidsKey].getSpiffeId()==this.config.adminSpiffeId) {
          this.adminClient.setX509(svids[svidsKey]);
          break;
        }
      }
      break;

    }
  }

  async requestJwt(spiffeId: string, audience: string[]): Promise<JwtSvid> {
    const request = new FetchJWTSVIDsRequest()
    request.setSelectorsList(this.getSelectors(spiffeId))
    request.setAudienceList(audience)
    console.log(request)
    const response = await this.identityClient.fetchJWTSVIDsRequest(request)
    const jwt = response.getSvidsList().pop();
    if(jwt) {
      return new JwtSvid(jwt.getToken());
    }else {
      throw new Error ('unable to obtain jwt svid')
    }
  }

  private getExpiry() {
    const now = new Date();
    const hoursToAdd: number = +this.config.JwtTTL;
    const ttlHours = new Date(now.getTime() + hoursToAdd + 60 * 60 * 1000); // Adding 1 hour in milliseconds
    return Math.floor(ttlHours.getTime() / 1000);
  }
}
