import { AdminClient } from "./AdminClient";
import {
  BatchCreateEntryRequest,
  BatchCreateEntryResponse,
  BatchUpdateEntryRequest,
  BatchUpdateEntryResponse,
  GetEntryRequest
} from "../proto/spire/api/server/entry_pb";
import { Entry } from "../proto/spire/api/types/entry_pb";
import { X509SVID } from "../proto/spire/workload_pb";

export class AdminMockClient implements AdminClient {
  setX509(x509Svid: X509SVID | undefined): void {
      throw new Error("Method not implemented.");
  }
  batchCreateEntry(request: BatchCreateEntryRequest): Promise<BatchCreateEntryResponse> {
    return new Promise((resolve, _reject) => {
      const response = new BatchCreateEntryResponse();

      resolve(response);
    });
  }

  batchUpdateEntry(request: BatchUpdateEntryRequest): Promise<BatchUpdateEntryResponse> {
    return new Promise((resolve, _reject) => {
      const response = new BatchUpdateEntryResponse();

      resolve(response);
    });
  }

  getEntry(request: GetEntryRequest): Promise<Entry> {
    return new Promise((resolve, _reject) => {
      const response = new Entry();

      resolve(response);
    });
  }

}
