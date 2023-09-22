// package: spire.api.server.entry.v1
// file: spire/api/server/entry.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as spire_api_types_entry_pb from "../../../spire/api/types/entry_pb";
import * as spire_api_types_federateswith_pb from "../../../spire/api/types/federateswith_pb";
import * as spire_api_types_selector_pb from "../../../spire/api/types/selector_pb";
import * as spire_api_types_spiffeid_pb from "../../../spire/api/types/spiffeid_pb";
import * as spire_api_types_status_pb from "../../../spire/api/types/status_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class CountEntriesRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CountEntriesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CountEntriesRequest): CountEntriesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CountEntriesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CountEntriesRequest;
    static deserializeBinaryFromReader(message: CountEntriesRequest, reader: jspb.BinaryReader): CountEntriesRequest;
}

export namespace CountEntriesRequest {
    export type AsObject = {
    }
}

export class CountEntriesResponse extends jspb.Message { 
    getCount(): number;
    setCount(value: number): CountEntriesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CountEntriesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CountEntriesResponse): CountEntriesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CountEntriesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CountEntriesResponse;
    static deserializeBinaryFromReader(message: CountEntriesResponse, reader: jspb.BinaryReader): CountEntriesResponse;
}

export namespace CountEntriesResponse {
    export type AsObject = {
        count: number,
    }
}

export class ListEntriesRequest extends jspb.Message { 

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): ListEntriesRequest.Filter | undefined;
    setFilter(value?: ListEntriesRequest.Filter): ListEntriesRequest;

    hasOutputMask(): boolean;
    clearOutputMask(): void;
    getOutputMask(): spire_api_types_entry_pb.EntryMask | undefined;
    setOutputMask(value?: spire_api_types_entry_pb.EntryMask): ListEntriesRequest;
    getPageSize(): number;
    setPageSize(value: number): ListEntriesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListEntriesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListEntriesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListEntriesRequest): ListEntriesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListEntriesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListEntriesRequest;
    static deserializeBinaryFromReader(message: ListEntriesRequest, reader: jspb.BinaryReader): ListEntriesRequest;
}

export namespace ListEntriesRequest {
    export type AsObject = {
        filter?: ListEntriesRequest.Filter.AsObject,
        outputMask?: spire_api_types_entry_pb.EntryMask.AsObject,
        pageSize: number,
        pageToken: string,
    }


    export class Filter extends jspb.Message { 

        hasBySpiffeId(): boolean;
        clearBySpiffeId(): void;
        getBySpiffeId(): spire_api_types_spiffeid_pb.SPIFFEID | undefined;
        setBySpiffeId(value?: spire_api_types_spiffeid_pb.SPIFFEID): Filter;

        hasByParentId(): boolean;
        clearByParentId(): void;
        getByParentId(): spire_api_types_spiffeid_pb.SPIFFEID | undefined;
        setByParentId(value?: spire_api_types_spiffeid_pb.SPIFFEID): Filter;

        hasBySelectors(): boolean;
        clearBySelectors(): void;
        getBySelectors(): spire_api_types_selector_pb.SelectorMatch | undefined;
        setBySelectors(value?: spire_api_types_selector_pb.SelectorMatch): Filter;

        hasByFederatesWith(): boolean;
        clearByFederatesWith(): void;
        getByFederatesWith(): spire_api_types_federateswith_pb.FederatesWithMatch | undefined;
        setByFederatesWith(value?: spire_api_types_federateswith_pb.FederatesWithMatch): Filter;

        hasByHint(): boolean;
        clearByHint(): void;
        getByHint(): google_protobuf_wrappers_pb.StringValue | undefined;
        setByHint(value?: google_protobuf_wrappers_pb.StringValue): Filter;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Filter.AsObject;
        static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Filter;
        static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
    }

    export namespace Filter {
        export type AsObject = {
            bySpiffeId?: spire_api_types_spiffeid_pb.SPIFFEID.AsObject,
            byParentId?: spire_api_types_spiffeid_pb.SPIFFEID.AsObject,
            bySelectors?: spire_api_types_selector_pb.SelectorMatch.AsObject,
            byFederatesWith?: spire_api_types_federateswith_pb.FederatesWithMatch.AsObject,
            byHint?: google_protobuf_wrappers_pb.StringValue.AsObject,
        }
    }

}

export class ListEntriesResponse extends jspb.Message { 
    clearEntriesList(): void;
    getEntriesList(): Array<spire_api_types_entry_pb.Entry>;
    setEntriesList(value: Array<spire_api_types_entry_pb.Entry>): ListEntriesResponse;
    addEntries(value?: spire_api_types_entry_pb.Entry, index?: number): spire_api_types_entry_pb.Entry;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListEntriesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListEntriesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListEntriesResponse): ListEntriesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListEntriesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListEntriesResponse;
    static deserializeBinaryFromReader(message: ListEntriesResponse, reader: jspb.BinaryReader): ListEntriesResponse;
}

export namespace ListEntriesResponse {
    export type AsObject = {
        entriesList: Array<spire_api_types_entry_pb.Entry.AsObject>,
        nextPageToken: string,
    }
}

export class GetEntryRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetEntryRequest;

    hasOutputMask(): boolean;
    clearOutputMask(): void;
    getOutputMask(): spire_api_types_entry_pb.EntryMask | undefined;
    setOutputMask(value?: spire_api_types_entry_pb.EntryMask): GetEntryRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetEntryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetEntryRequest): GetEntryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetEntryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetEntryRequest;
    static deserializeBinaryFromReader(message: GetEntryRequest, reader: jspb.BinaryReader): GetEntryRequest;
}

export namespace GetEntryRequest {
    export type AsObject = {
        id: string,
        outputMask?: spire_api_types_entry_pb.EntryMask.AsObject,
    }
}

export class BatchCreateEntryRequest extends jspb.Message { 
    clearEntriesList(): void;
    getEntriesList(): Array<spire_api_types_entry_pb.Entry>;
    setEntriesList(value: Array<spire_api_types_entry_pb.Entry>): BatchCreateEntryRequest;
    addEntries(value?: spire_api_types_entry_pb.Entry, index?: number): spire_api_types_entry_pb.Entry;

    hasOutputMask(): boolean;
    clearOutputMask(): void;
    getOutputMask(): spire_api_types_entry_pb.EntryMask | undefined;
    setOutputMask(value?: spire_api_types_entry_pb.EntryMask): BatchCreateEntryRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchCreateEntryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BatchCreateEntryRequest): BatchCreateEntryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchCreateEntryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchCreateEntryRequest;
    static deserializeBinaryFromReader(message: BatchCreateEntryRequest, reader: jspb.BinaryReader): BatchCreateEntryRequest;
}

export namespace BatchCreateEntryRequest {
    export type AsObject = {
        entriesList: Array<spire_api_types_entry_pb.Entry.AsObject>,
        outputMask?: spire_api_types_entry_pb.EntryMask.AsObject,
    }
}

export class BatchCreateEntryResponse extends jspb.Message { 
    clearResultsList(): void;
    getResultsList(): Array<BatchCreateEntryResponse.Result>;
    setResultsList(value: Array<BatchCreateEntryResponse.Result>): BatchCreateEntryResponse;
    addResults(value?: BatchCreateEntryResponse.Result, index?: number): BatchCreateEntryResponse.Result;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchCreateEntryResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BatchCreateEntryResponse): BatchCreateEntryResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchCreateEntryResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchCreateEntryResponse;
    static deserializeBinaryFromReader(message: BatchCreateEntryResponse, reader: jspb.BinaryReader): BatchCreateEntryResponse;
}

export namespace BatchCreateEntryResponse {
    export type AsObject = {
        resultsList: Array<BatchCreateEntryResponse.Result.AsObject>,
    }


    export class Result extends jspb.Message { 

        hasStatus(): boolean;
        clearStatus(): void;
        getStatus(): spire_api_types_status_pb.Status | undefined;
        setStatus(value?: spire_api_types_status_pb.Status): Result;

        hasEntry(): boolean;
        clearEntry(): void;
        getEntry(): spire_api_types_entry_pb.Entry | undefined;
        setEntry(value?: spire_api_types_entry_pb.Entry): Result;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Result.AsObject;
        static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Result;
        static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
    }

    export namespace Result {
        export type AsObject = {
            status?: spire_api_types_status_pb.Status.AsObject,
            entry?: spire_api_types_entry_pb.Entry.AsObject,
        }
    }

}

export class BatchUpdateEntryRequest extends jspb.Message { 
    clearEntriesList(): void;
    getEntriesList(): Array<spire_api_types_entry_pb.Entry>;
    setEntriesList(value: Array<spire_api_types_entry_pb.Entry>): BatchUpdateEntryRequest;
    addEntries(value?: spire_api_types_entry_pb.Entry, index?: number): spire_api_types_entry_pb.Entry;

    hasInputMask(): boolean;
    clearInputMask(): void;
    getInputMask(): spire_api_types_entry_pb.EntryMask | undefined;
    setInputMask(value?: spire_api_types_entry_pb.EntryMask): BatchUpdateEntryRequest;

    hasOutputMask(): boolean;
    clearOutputMask(): void;
    getOutputMask(): spire_api_types_entry_pb.EntryMask | undefined;
    setOutputMask(value?: spire_api_types_entry_pb.EntryMask): BatchUpdateEntryRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchUpdateEntryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BatchUpdateEntryRequest): BatchUpdateEntryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchUpdateEntryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchUpdateEntryRequest;
    static deserializeBinaryFromReader(message: BatchUpdateEntryRequest, reader: jspb.BinaryReader): BatchUpdateEntryRequest;
}

export namespace BatchUpdateEntryRequest {
    export type AsObject = {
        entriesList: Array<spire_api_types_entry_pb.Entry.AsObject>,
        inputMask?: spire_api_types_entry_pb.EntryMask.AsObject,
        outputMask?: spire_api_types_entry_pb.EntryMask.AsObject,
    }
}

export class BatchUpdateEntryResponse extends jspb.Message { 
    clearResultsList(): void;
    getResultsList(): Array<BatchUpdateEntryResponse.Result>;
    setResultsList(value: Array<BatchUpdateEntryResponse.Result>): BatchUpdateEntryResponse;
    addResults(value?: BatchUpdateEntryResponse.Result, index?: number): BatchUpdateEntryResponse.Result;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchUpdateEntryResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BatchUpdateEntryResponse): BatchUpdateEntryResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchUpdateEntryResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchUpdateEntryResponse;
    static deserializeBinaryFromReader(message: BatchUpdateEntryResponse, reader: jspb.BinaryReader): BatchUpdateEntryResponse;
}

export namespace BatchUpdateEntryResponse {
    export type AsObject = {
        resultsList: Array<BatchUpdateEntryResponse.Result.AsObject>,
    }


    export class Result extends jspb.Message { 

        hasStatus(): boolean;
        clearStatus(): void;
        getStatus(): spire_api_types_status_pb.Status | undefined;
        setStatus(value?: spire_api_types_status_pb.Status): Result;

        hasEntry(): boolean;
        clearEntry(): void;
        getEntry(): spire_api_types_entry_pb.Entry | undefined;
        setEntry(value?: spire_api_types_entry_pb.Entry): Result;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Result.AsObject;
        static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Result;
        static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
    }

    export namespace Result {
        export type AsObject = {
            status?: spire_api_types_status_pb.Status.AsObject,
            entry?: spire_api_types_entry_pb.Entry.AsObject,
        }
    }

}

export class BatchDeleteEntryRequest extends jspb.Message { 
    clearIdsList(): void;
    getIdsList(): Array<string>;
    setIdsList(value: Array<string>): BatchDeleteEntryRequest;
    addIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchDeleteEntryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BatchDeleteEntryRequest): BatchDeleteEntryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchDeleteEntryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchDeleteEntryRequest;
    static deserializeBinaryFromReader(message: BatchDeleteEntryRequest, reader: jspb.BinaryReader): BatchDeleteEntryRequest;
}

export namespace BatchDeleteEntryRequest {
    export type AsObject = {
        idsList: Array<string>,
    }
}

export class BatchDeleteEntryResponse extends jspb.Message { 
    clearResultsList(): void;
    getResultsList(): Array<BatchDeleteEntryResponse.Result>;
    setResultsList(value: Array<BatchDeleteEntryResponse.Result>): BatchDeleteEntryResponse;
    addResults(value?: BatchDeleteEntryResponse.Result, index?: number): BatchDeleteEntryResponse.Result;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchDeleteEntryResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BatchDeleteEntryResponse): BatchDeleteEntryResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchDeleteEntryResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchDeleteEntryResponse;
    static deserializeBinaryFromReader(message: BatchDeleteEntryResponse, reader: jspb.BinaryReader): BatchDeleteEntryResponse;
}

export namespace BatchDeleteEntryResponse {
    export type AsObject = {
        resultsList: Array<BatchDeleteEntryResponse.Result.AsObject>,
    }


    export class Result extends jspb.Message { 

        hasStatus(): boolean;
        clearStatus(): void;
        getStatus(): spire_api_types_status_pb.Status | undefined;
        setStatus(value?: spire_api_types_status_pb.Status): Result;
        getId(): string;
        setId(value: string): Result;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Result.AsObject;
        static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Result;
        static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
    }

    export namespace Result {
        export type AsObject = {
            status?: spire_api_types_status_pb.Status.AsObject,
            id: string,
        }
    }

}

export class GetAuthorizedEntriesRequest extends jspb.Message { 

    hasOutputMask(): boolean;
    clearOutputMask(): void;
    getOutputMask(): spire_api_types_entry_pb.EntryMask | undefined;
    setOutputMask(value?: spire_api_types_entry_pb.EntryMask): GetAuthorizedEntriesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAuthorizedEntriesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAuthorizedEntriesRequest): GetAuthorizedEntriesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAuthorizedEntriesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAuthorizedEntriesRequest;
    static deserializeBinaryFromReader(message: GetAuthorizedEntriesRequest, reader: jspb.BinaryReader): GetAuthorizedEntriesRequest;
}

export namespace GetAuthorizedEntriesRequest {
    export type AsObject = {
        outputMask?: spire_api_types_entry_pb.EntryMask.AsObject,
    }
}

export class GetAuthorizedEntriesResponse extends jspb.Message { 
    clearEntriesList(): void;
    getEntriesList(): Array<spire_api_types_entry_pb.Entry>;
    setEntriesList(value: Array<spire_api_types_entry_pb.Entry>): GetAuthorizedEntriesResponse;
    addEntries(value?: spire_api_types_entry_pb.Entry, index?: number): spire_api_types_entry_pb.Entry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAuthorizedEntriesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAuthorizedEntriesResponse): GetAuthorizedEntriesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAuthorizedEntriesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAuthorizedEntriesResponse;
    static deserializeBinaryFromReader(message: GetAuthorizedEntriesResponse, reader: jspb.BinaryReader): GetAuthorizedEntriesResponse;
}

export namespace GetAuthorizedEntriesResponse {
    export type AsObject = {
        entriesList: Array<spire_api_types_entry_pb.Entry.AsObject>,
    }
}
