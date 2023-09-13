import {
  BatchCreateEntryRequest,
  BatchCreateEntryResponse,
  BatchUpdateEntryRequest,
  BatchUpdateEntryResponse,
  GetEntryRequest
} from "../proto/spire/api/server/entry_pb";
import { Entry } from "../proto/spire/api/types/entry_pb";
import { X509SVID } from "../proto/spire/workload_pb";

export interface AdminClient{
  batchCreateEntry(request: BatchCreateEntryRequest): Promise<BatchCreateEntryResponse>
  batchUpdateEntry(request: BatchUpdateEntryRequest): Promise<BatchUpdateEntryResponse>
  getEntry(request: GetEntryRequest): Promise<Entry>

  setX509(x509Svid: X509SVID | undefined): void;
}
