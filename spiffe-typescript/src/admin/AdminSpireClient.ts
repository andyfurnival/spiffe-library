import { AdminClient } from "./AdminClient";
import {
  BatchCreateEntryRequest,
  BatchCreateEntryResponse,
  BatchUpdateEntryRequest,
  BatchUpdateEntryResponse,
  GetEntryRequest
} from "../proto/spire/api/server/entry_pb";
import { Entry } from "../proto/spire/api/types/entry_pb";
import { EntryClient } from "../proto/spire/api/server/entry_grpc_pb";
import { ChannelCredentials, ClientOptions } from "@grpc/grpc-js";
import { X509SVID } from "../proto/spire/workload_pb";
import { AdminConfig } from "../config";
import { CertificateUtils } from "../internal/CertificateUtils";
import { Certificate, PrivateKeyInfo } from "pkijs";
import * as asn1js from "asn1js";
import jwkToPem from "jwk-to-pem";

export class AdminSpireClient implements AdminClient {
  private x509: X509SVID | undefined;
  private config: AdminConfig;

  constructor(config: AdminConfig) {
    this.config = config;
  }

  batchCreateEntry(request: BatchCreateEntryRequest): Promise<BatchCreateEntryResponse> {
    return this.getGrpcClient().then((client) => {
      return new Promise((resolve, reject) => {
        return client.batchCreateEntry(request, (error, response) => {
          if (error) {
            reject(new Error("An error occurred: " + error));
          } else {
            resolve(response);
          }
        });
      });
    });
  }

  batchUpdateEntry(request: BatchUpdateEntryRequest): Promise<BatchUpdateEntryResponse> {
    return this.getGrpcClient().then((client) => {
      return new Promise((resolve, reject) => {
        return client.batchUpdateEntry(request, (error, response) => {
          if (error) {
            reject(new Error("An error occurred: " + error));
          } else {
            resolve(response);
          }
        });
      });
    });
  }

  getEntry(request: GetEntryRequest): Promise<Entry> {
    return this.getGrpcClient().then((client) => {
      return new Promise((resolve, reject) => {
        return client.getEntry(request, (error, response) => {
          if (error) {
            reject(new Error("An error occurred: " + error));
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

      const root = this.getCertificate(this.x509?.getBundle_asB64());
      const certChain = this.getCertificate(this.x509?.getX509Svid_asB64());

      const key = this.x509?.getX509SvidKey_asB64();
      const asn1 = asn1js.fromBER(Buffer.from(key, "base64"));
      const pk = new PrivateKeyInfo({ schema: asn1.result });

      const privateKeyJWK = pk.toJSON();
      const privateKeyPEM = jwkToPem(privateKeyJWK, { private: true });
      console.log(privateKeyJWK);

      return new Promise((resolve, _reject) => {
        root.then((rootResult) => {
          certChain.then((certResult) => {
            if (rootResult === undefined) throw new Error("no root certificate");
            if (certResult === undefined) throw new Error("no certificate");
            const rootPEM = this.getPEM(rootResult[0]);
            const leafPEM = this.getPEM(certResult[0]);
            const intermediatePEM = this.getPEM(certResult[1]);

            console.log(rootPEM);
            console.log(leafPEM);
            console.log(intermediatePEM);
            console.log(privateKeyPEM);

            const verifyOptions = {
              checkServerIdentity(hostname: any, cert: any) {
                // Don't check
                console.log(hostname, cert);
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

  private async getCertificate(base64: string): Promise<Certificate[] | undefined> {
    return new Promise((resolve, _reject) => {
      CertificateUtils.parseX509DER(base64).then((result) => {
        resolve(result);
      });
    });
  }

}
