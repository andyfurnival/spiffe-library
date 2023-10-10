import { AdminClient } from "./AdminClient";
import {
  BatchCreateEntryRequest,
  BatchCreateEntryResponse,
  BatchUpdateEntryRequest,
  BatchUpdateEntryResponse,
  GetEntryRequest
} from "../proto/private/spire/api/server/entry";
import { Entry } from "../proto/private/spire/api/types/entry";
import { X509SVID } from "../proto/public/workload";

export class AdminMockClient implements AdminClient {
  setX509(x509Svid: X509SVID | undefined): void {
      throw new Error("Method not implemented.");
  }
  batchCreateEntry(request: BatchCreateEntryRequest): Promise<BatchCreateEntryResponse> {
    return new Promise((resolve, _reject) => {
      const response : BatchCreateEntryResponse = { results: [] };

      resolve(response);
    });
  }

  batchUpdateEntry(request: BatchUpdateEntryRequest): Promise<BatchUpdateEntryResponse> {
    return new Promise((resolve, _reject) => {
      const response : BatchUpdateEntryResponse = { results: [] }

      resolve(response);
    });
  }

  getEntry(request: GetEntryRequest): Promise<Entry> {
    return new Promise((resolve, _reject) => {
      const response : Entry = {
        admin: false,
        createdAt: BigInt(0),
        dnsNames: [],
        downstream: false,
        expiresAt: BigInt(0),
        federatesWith: [],
        hint: "",
        id: "",
        jwtSvidTtl: 0,
        revisionNumber: BigInt(0),
        selectors: [],
        storeSvid: false,
        x509SvidTtl: 0
      }

      resolve(response);
    });
  }

}
