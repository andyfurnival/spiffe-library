import { AdminClient } from "./AdminClient";
import {
  BatchCreateEntryRequest,
  BatchCreateEntryResponse,
  BatchUpdateEntryRequest,
  BatchUpdateEntryResponse,
  GetEntryRequest
} from "../proto/private/spire/api/server/entry";
import { Entry } from "../proto/private/spire/api/types/entry";
import { EntryClient } from "../proto/private/spire/api/server/entry.grpc-client";
import { ChannelCredentials, ClientOptions } from "@grpc/grpc-js";
import { X509SVID } from "../proto/public/workload";
import { AdminConfig } from "../config";
import { CertificateUtils } from "../internal/CertificateUtils";
import { Certificate } from "pkijs";
import { Logger } from '../internal/Logger';


export class AdminSpireClient implements AdminClient {
  private x509: X509SVID | undefined;
  private config: AdminConfig;
  private logger = new Logger(AdminSpireClient);
  constructor(config: AdminConfig) {
    this.config = config;
  }

  batchCreateEntry(request: BatchCreateEntryRequest): Promise<BatchCreateEntryResponse|undefined> {
    return this.getGrpcClient().then((client) => {
      return new Promise((resolve, reject) => {
        return client.batchCreateEntry(
          request,
          (error, response) => {
            if (error) {
              reject(new Error('An error occurred: ' + error));
            } else {
              resolve(response);
            }
          }
        );
      });
    });
  }

  batchUpdateEntry(request: BatchUpdateEntryRequest): Promise<BatchUpdateEntryResponse|undefined> {
    return this.getGrpcClient().then((client) => {
      return new Promise((resolve, reject) => {
        return client.batchUpdateEntry(
          request,
          (error, response) => {
            if (error) {
              reject(new Error('An error occurred: ' + error));
            } else {
              resolve(response);
            }
          }
        );
      });
    });
  }

  getEntry(request: GetEntryRequest): Promise<Entry|undefined> {
    return this.getGrpcClient().then((client) => {
      return new Promise((resolve, reject) => {
        return client.getEntry(request, (error, response) => {
          if (error) {
            reject(new Error('An error occurred: ' + error));
          } else {
            resolve(response);
          }
        });
      });
    });
  }

  setX509(x509Svid: X509SVID): void {
    this.x509 = x509Svid;
  }

  private getGrpcClient() {
    let address = ((this.config?.spireEndpoint) !== undefined) ? this.config?.spireEndpoint : "http://localhost:8080";
    if (address === "") {
      address = "localhost:8080";
    }
    return this.getCredentials().then((credentials) => {

      const opts: Partial<ClientOptions> = {
        //'grpc.ssl_target_name_override': 'server.fs.com',
        "grpc.keepalive_permit_without_calls": 1,
        "grpc.keepalive_time_ms": 15000,
        "grpc.keepalive_timeout_ms": 1000,
        "grpc.service_config": JSON.stringify({
          loadBalancingConfig: [{ round_robin: {} }]
        })
      };

      return new EntryClient(address, credentials, opts);
    });

  }

  private getCredentials(): Promise<ChannelCredentials> {
    if (this.x509 === undefined)
      return new Promise((resolve, _reject) => {
        resolve(ChannelCredentials.createInsecure());
      });
    else {

      const root = this.getCertificate(Buffer.from(this.x509?.bundle).toString("base64"));
      const certChain = this.getCertificate(Buffer.from(this.x509?.x509Svid).toString("base64"));

      const key = Buffer.from(this.x509?.x509SvidKey).toString("base64");
      const privateKeyPEM = this.derToPem(key)

      return new Promise((resolve, _reject) => {
        root.then((rootResult) => {
          certChain.then((certResult) => {
            if (rootResult === undefined) throw new Error("no root certificate");
            if (certResult === undefined) throw new Error("no certificate");
            const rootPEM = this.getPEM(rootResult[0]);
            const leafPEM = this.getPEM(certResult[0]);
            const intermediatePEM = this.getPEM(certResult[1]);

            this.logger.debug(rootPEM);
            this.logger.debug(leafPEM);
            this.logger.debug(intermediatePEM);
            this.logger.debug(privateKeyPEM);

            const verifyOptions = {
              checkServerIdentity(hostname: any, cert: any) {

                return undefined;
              }
            };

            resolve(ChannelCredentials.createSsl(Buffer.from(rootPEM), Buffer.from(privateKeyPEM.toString()), Buffer.from(leafPEM + "\n" + intermediatePEM), verifyOptions));
          });
        });
      });
    }
  }

  private getPEM(rootResult: Certificate) {
    const rootDER = rootResult.toSchema().toBER(false);
    const rootBuf = Buffer.from(new Uint8Array(rootDER).buffer);

    return `-----BEGIN CERTIFICATE-----\n${rootBuf.toString("base64")}\n-----END CERTIFICATE-----`;
  }

  private derToPem(derBase64: string): string {
    const derBuffer: Buffer = Buffer.from(derBase64, 'base64');
    const header: string = '-----BEGIN PRIVATE KEY-----';
    const footer: string = '-----END PRIVATE KEY-----';
    return [header, derBuffer.toString('base64'), footer].join('\n');
  }

  private async getCertificate(base64: string): Promise<Certificate[] | undefined> {
    return new Promise((resolve, _reject) => {
      CertificateUtils.parseX509DER(base64).then((result) => {
        resolve(result);
      });
    });
  }

}
