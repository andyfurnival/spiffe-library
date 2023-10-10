import {
  JWTBundlesRequest,
  JWTBundlesResponse,
  JWTSVIDRequest,
  JWTSVIDResponse,
  ValidateJWTSVIDRequest,
  ValidateJWTSVIDResponse,
  X509BundlesRequest,
  X509BundlesResponse,
  X509SVIDRequest,
  X509SVIDResponse
} from "../proto/public/workload";
import { WorkloadClient } from "./WorkloadClient";
import { SpiffeWorkloadAPIClient } from "../proto/public/workload.grpc-client";
import * as grpc from "@grpc/grpc-js";
import { ChannelCredentials } from "@grpc/grpc-js";
import { WorkloadConfig } from "../config";
import { TokenExpiredError } from "../exception";
import { AuthenticationTokenMissingError } from "../exception/AuthenticationTokenMissingError";


export class WorkloadSpireClient implements WorkloadClient {
    constructor(config: WorkloadConfig) {
        this.config = config;
        this.client = this.getGrpcClient()
    }
    private config: WorkloadConfig;
    private client: SpiffeWorkloadAPIClient;


    async *fetchX509SVID(request: X509SVIDRequest): AsyncIterable<X509SVIDResponse> {
        for await (const response of this.client.fetchX509SVID(request, this.getMetaData())) {
            yield response;
        }
    }

    async *fetchX509Bundles(request: X509BundlesRequest): AsyncIterable<X509BundlesResponse> {
        for await (const response of this.client.fetchX509Bundles(request, this.getMetaData())) {
            yield response;
        }
    }
    async fetchJWTSVID(request: JWTSVIDRequest): Promise<JWTSVIDResponse | undefined> {
        return new Promise((resolve, reject) => {
            return this.client.fetchJWTSVID(
              request,
              this.getMetaData(),
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
    async *fetchJWTBundles(request: JWTBundlesRequest): AsyncIterable<JWTBundlesResponse> {
        for await (const response of this.client.fetchJWTBundles(request, this.getMetaData())) {
            yield response;
        }
    }
    async validateJWTSVID(request: ValidateJWTSVIDRequest): Promise<ValidateJWTSVIDResponse|undefined> {
        return new Promise((resolve, reject) => {
            return this.client.validateJWTSVID(
              request,
              this.getMetaData(),
              (error, response) => {
                if (error) {
                  switch (error.message) {
                    case '3 INVALID_ARGUMENT: token has expired':
                      reject(new TokenExpiredError(error.message));
                      break;
                    case '3 INVALID_ARGUMENT: security header missing from request':
                      reject(
                        new AuthenticationTokenMissingError(error.message)
                      );
                      break;
                    default:
                      reject(new Error(error.message));
                  }
                } else {
                  resolve(response);
                }
              }
            );
        });
    }

    private getGrpcClient() {
        const address = ((this.config?.spireEndpoint) !== "") ? this.config?.spireEndpoint : "http://localhost:8080";
        return new SpiffeWorkloadAPIClient(address,ChannelCredentials.createInsecure() )
    }

  private getMetaData(){
    const metadata = new grpc.Metadata();
    metadata.add('workload.spiffe.io', 'true')
        return metadata
    }
}
