import {
  BatchCreateEntryRequest,
  BatchCreateEntryResponse,
  BatchUpdateEntryRequest,
  BatchUpdateEntryResponse,
  GetEntryRequest
} from "../proto/private/spire/api/server/entry";
import { Entry } from "../proto/private/spire/api/types/entry";
import { X509SVID  } from "../proto/public/workload";

export interface AdminClient{
  batchCreateEntry(request: BatchCreateEntryRequest): Promise<BatchCreateEntryResponse|undefined>
  batchUpdateEntry(request: BatchUpdateEntryRequest): Promise<BatchUpdateEntryResponse|undefined>
  getEntry(request: GetEntryRequest): Promise<Entry|undefined>

  setX509(x509Svid: X509SVID | undefined): void;
}
