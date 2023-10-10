import { FetchJWTSVIDsRequest, FetchJWTSVIDsResponse } from "../proto/private/spire/api/agent/delegatedidentity";

export interface IdentityClient {
  fetchJWTSVIDsRequest(request :FetchJWTSVIDsRequest): Promise<FetchJWTSVIDsResponse|undefined>;
}
