import { IdentityClient } from "./IdentityClient";
import { FetchJWTSVIDsRequest, FetchJWTSVIDsResponse } from "../proto/private/spire/api/agent/delegatedidentity";
import { WorkloadConfig } from "../config";
import { ChannelCredentials } from "@grpc/grpc-js";
import { DelegatedIdentityClient } from "../proto/private/spire/api/agent/delegatedidentity.grpc-client";

export class IdentitySpireClient implements IdentityClient{

  constructor(config: WorkloadConfig) {
    this.config = config;
    this.client = this.getGrpcClient()
  }

  private config: WorkloadConfig;
  private client: DelegatedIdentityClient;

  async fetchJWTSVIDsRequest(request: FetchJWTSVIDsRequest): Promise<FetchJWTSVIDsResponse|undefined> {
    return new Promise((resolve, reject) => {
      return this.client.fetchJWTSVIDs(
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
  }

  private getGrpcClient() {
    const address = ((this.config?.spireEndpoint) !== "") ? this.config?.spireEndpoint : "http://localhost:8080";
    return new DelegatedIdentityClient(address, ChannelCredentials.createInsecure(), undefined )
  }


}
