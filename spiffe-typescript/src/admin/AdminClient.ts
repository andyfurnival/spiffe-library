import {
  BatchCreateEntryRequest,
  BatchCreateEntryResponse,
  BatchUpdateEntryRequest,
  BatchUpdateEntryResponse,
  GetEntryRequest
} from "../proto/private/spire/api/server/entry";
import { Entry } from "../proto/private/spire/api/types/entry";
import { X509Svid } from "../svid";


export interface AdminClient{
  batchCreateEntry(request: BatchCreateEntryRequest): Promise<BatchCreateEntryResponse|undefined>
  batchUpdateEntry(request: BatchUpdateEntryRequest): Promise<BatchUpdateEntryResponse|undefined>
  getEntry(request: GetEntryRequest): Promise<Entry|undefined>

  setX509(x509Svid: X509Svid | undefined): void;
}
