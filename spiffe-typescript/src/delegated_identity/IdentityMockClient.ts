import { IdentityClient } from "./IdentityClient";
import { FetchJWTSVIDsRequest, FetchJWTSVIDsResponse } from "../proto/spire/api/agent/delegatedidentity_pb";

export class IdentityMockClient implements IdentityClient{
  fetchJWTSVIDsRequest(request: FetchJWTSVIDsRequest): Promise<FetchJWTSVIDsResponse> {
    return new Promise((resolve, _reject) => {
      const response = new FetchJWTSVIDsResponse();

      resolve(response);
    });
  }

}
