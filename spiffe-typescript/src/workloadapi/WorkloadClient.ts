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

export interface WorkloadClient {
  fetchX509SVID(request: X509SVIDRequest): AsyncIterable<X509SVIDResponse>;
  fetchX509Bundles(request: X509BundlesRequest): AsyncIterable<X509BundlesResponse>;
  fetchJWTSVID(request: JWTSVIDRequest): Promise<JWTSVIDResponse|undefined>;
  fetchJWTBundles(request: JWTBundlesRequest): AsyncIterable<JWTBundlesResponse|undefined> ;
  validateJWTSVID(request: ValidateJWTSVIDRequest): Promise<ValidateJWTSVIDResponse|undefined>;
}
