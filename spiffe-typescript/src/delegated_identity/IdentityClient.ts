import { FetchJWTSVIDsRequest, FetchJWTSVIDsResponse } from "../proto/spire/api/agent/delegatedidentity_pb";

export interface IdentityClient {
  fetchJWTSVIDsRequest(request :FetchJWTSVIDsRequest): Promise<FetchJWTSVIDsResponse>;
}
