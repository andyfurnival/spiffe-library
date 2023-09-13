import { IdentityClient } from "./IdentityClient";
import { FetchJWTSVIDsRequest, FetchJWTSVIDsResponse } from "../proto/spire/api/agent/delegatedidentity_pb";
import { WorkloadConfig } from "../config";
import { ChannelCredentials } from "@grpc/grpc-js";
import { DelegatedIdentityClient } from "../proto/spire/api/agent/delegatedidentity_grpc_pb";

export class IdentitySpireClient implements IdentityClient{

  constructor(config: WorkloadConfig) {
    this.config = config;
    this.client = this.getGrpcClient()
  }

  private config: WorkloadConfig;
  private client: DelegatedIdentityClient;

  async fetchJWTSVIDsRequest(request: FetchJWTSVIDsRequest): Promise<FetchJWTSVIDsResponse> {
    return new Promise((resolve, reject) => {
      return this.client.fetchJWTSVIDs(request,  (error, response) => {
        if (error) {
          reject(new Error("An error occurred: " + error));
        } else {
          resolve(response);
        }
      });
    });
  }

  private getGrpcClient() {
    const address = ((this.config?.spireEndpoint) !== "") ? this.config?.spireEndpoint : "http://localhost:8080";
    return new DelegatedIdentityClient(address,ChannelCredentials.createInsecure() )
  }


}
