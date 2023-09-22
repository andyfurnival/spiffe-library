// package: spire.api.server.entry.v1
// file: spire/api/server/entry.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as spire_api_server_entry_pb from "../../../spire/api/server/entry_pb";
import * as spire_api_types_entry_pb from "../../../spire/api/types/entry_pb";
import * as spire_api_types_federateswith_pb from "../../../spire/api/types/federateswith_pb";
import * as spire_api_types_selector_pb from "../../../spire/api/types/selector_pb";
import * as spire_api_types_spiffeid_pb from "../../../spire/api/types/spiffeid_pb";
import * as spire_api_types_status_pb from "../../../spire/api/types/status_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

interface IEntryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    countEntries: IEntryService_ICountEntries;
    listEntries: IEntryService_IListEntries;
    getEntry: IEntryService_IGetEntry;
    batchCreateEntry: IEntryService_IBatchCreateEntry;
    batchUpdateEntry: IEntryService_IBatchUpdateEntry;
    batchDeleteEntry: IEntryService_IBatchDeleteEntry;
    getAuthorizedEntries: IEntryService_IGetAuthorizedEntries;
}

interface IEntryService_ICountEntries extends grpc.MethodDefinition<spire_api_server_entry_pb.CountEntriesRequest, spire_api_server_entry_pb.CountEntriesResponse> {
    path: "/spire.api.server.entry.v1.Entry/CountEntries";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<spire_api_server_entry_pb.CountEntriesRequest>;
    requestDeserialize: grpc.deserialize<spire_api_server_entry_pb.CountEntriesRequest>;
    responseSerialize: grpc.serialize<spire_api_server_entry_pb.CountEntriesResponse>;
    responseDeserialize: grpc.deserialize<spire_api_server_entry_pb.CountEntriesResponse>;
}
interface IEntryService_IListEntries extends grpc.MethodDefinition<spire_api_server_entry_pb.ListEntriesRequest, spire_api_server_entry_pb.ListEntriesResponse> {
    path: "/spire.api.server.entry.v1.Entry/ListEntries";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<spire_api_server_entry_pb.ListEntriesRequest>;
    requestDeserialize: grpc.deserialize<spire_api_server_entry_pb.ListEntriesRequest>;
    responseSerialize: grpc.serialize<spire_api_server_entry_pb.ListEntriesResponse>;
    responseDeserialize: grpc.deserialize<spire_api_server_entry_pb.ListEntriesResponse>;
}
interface IEntryService_IGetEntry extends grpc.MethodDefinition<spire_api_server_entry_pb.GetEntryRequest, spire_api_types_entry_pb.Entry> {
    path: "/spire.api.server.entry.v1.Entry/GetEntry";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<spire_api_server_entry_pb.GetEntryRequest>;
    requestDeserialize: grpc.deserialize<spire_api_server_entry_pb.GetEntryRequest>;
    responseSerialize: grpc.serialize<spire_api_types_entry_pb.Entry>;
    responseDeserialize: grpc.deserialize<spire_api_types_entry_pb.Entry>;
}
interface IEntryService_IBatchCreateEntry extends grpc.MethodDefinition<spire_api_server_entry_pb.BatchCreateEntryRequest, spire_api_server_entry_pb.BatchCreateEntryResponse> {
    path: "/spire.api.server.entry.v1.Entry/BatchCreateEntry";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<spire_api_server_entry_pb.BatchCreateEntryRequest>;
    requestDeserialize: grpc.deserialize<spire_api_server_entry_pb.BatchCreateEntryRequest>;
    responseSerialize: grpc.serialize<spire_api_server_entry_pb.BatchCreateEntryResponse>;
    responseDeserialize: grpc.deserialize<spire_api_server_entry_pb.BatchCreateEntryResponse>;
}
interface IEntryService_IBatchUpdateEntry extends grpc.MethodDefinition<spire_api_server_entry_pb.BatchUpdateEntryRequest, spire_api_server_entry_pb.BatchUpdateEntryResponse> {
    path: "/spire.api.server.entry.v1.Entry/BatchUpdateEntry";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<spire_api_server_entry_pb.BatchUpdateEntryRequest>;
    requestDeserialize: grpc.deserialize<spire_api_server_entry_pb.BatchUpdateEntryRequest>;
    responseSerialize: grpc.serialize<spire_api_server_entry_pb.BatchUpdateEntryResponse>;
    responseDeserialize: grpc.deserialize<spire_api_server_entry_pb.BatchUpdateEntryResponse>;
}
interface IEntryService_IBatchDeleteEntry extends grpc.MethodDefinition<spire_api_server_entry_pb.BatchDeleteEntryRequest, spire_api_server_entry_pb.BatchDeleteEntryResponse> {
    path: "/spire.api.server.entry.v1.Entry/BatchDeleteEntry";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<spire_api_server_entry_pb.BatchDeleteEntryRequest>;
    requestDeserialize: grpc.deserialize<spire_api_server_entry_pb.BatchDeleteEntryRequest>;
    responseSerialize: grpc.serialize<spire_api_server_entry_pb.BatchDeleteEntryResponse>;
    responseDeserialize: grpc.deserialize<spire_api_server_entry_pb.BatchDeleteEntryResponse>;
}
interface IEntryService_IGetAuthorizedEntries extends grpc.MethodDefinition<spire_api_server_entry_pb.GetAuthorizedEntriesRequest, spire_api_server_entry_pb.GetAuthorizedEntriesResponse> {
    path: "/spire.api.server.entry.v1.Entry/GetAuthorizedEntries";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<spire_api_server_entry_pb.GetAuthorizedEntriesRequest>;
    requestDeserialize: grpc.deserialize<spire_api_server_entry_pb.GetAuthorizedEntriesRequest>;
    responseSerialize: grpc.serialize<spire_api_server_entry_pb.GetAuthorizedEntriesResponse>;
    responseDeserialize: grpc.deserialize<spire_api_server_entry_pb.GetAuthorizedEntriesResponse>;
}

export const EntryService: IEntryService;

export interface IEntryServer {
    countEntries: grpc.handleUnaryCall<spire_api_server_entry_pb.CountEntriesRequest, spire_api_server_entry_pb.CountEntriesResponse>;
    listEntries: grpc.handleUnaryCall<spire_api_server_entry_pb.ListEntriesRequest, spire_api_server_entry_pb.ListEntriesResponse>;
    getEntry: grpc.handleUnaryCall<spire_api_server_entry_pb.GetEntryRequest, spire_api_types_entry_pb.Entry>;
    batchCreateEntry: grpc.handleUnaryCall<spire_api_server_entry_pb.BatchCreateEntryRequest, spire_api_server_entry_pb.BatchCreateEntryResponse>;
    batchUpdateEntry: grpc.handleUnaryCall<spire_api_server_entry_pb.BatchUpdateEntryRequest, spire_api_server_entry_pb.BatchUpdateEntryResponse>;
    batchDeleteEntry: grpc.handleUnaryCall<spire_api_server_entry_pb.BatchDeleteEntryRequest, spire_api_server_entry_pb.BatchDeleteEntryResponse>;
    getAuthorizedEntries: grpc.handleUnaryCall<spire_api_server_entry_pb.GetAuthorizedEntriesRequest, spire_api_server_entry_pb.GetAuthorizedEntriesResponse>;
}

export interface IEntryClient {
    countEntries(request: spire_api_server_entry_pb.CountEntriesRequest, callback: (error: grpc.ServiceError | null, response: spire_api_server_entry_pb.CountEntriesResponse) => void): grpc.ClientUnaryCall;
    countEntries(request: spire_api_server_entry_pb.CountEntriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: spire_api_server_entry_pb.CountEntriesResponse) => void): grpc.ClientUnaryCall;
    countEntries(request: spire_api_server_entry_pb.CountEntriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: spire_api_server_entry_pb.CountEntriesResponse) => void): grpc.ClientUnaryCall;
    listEntries(request: spire_api_server_entry_pb.ListEntriesRequest, callback: (error: grpc.ServiceError | null, response: spire_api_server_entry_pb.ListEntriesResponse) => void): grpc.ClientUnaryCall;
    listEntries(request: spire_api_server_entry_pb.ListEntriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: spire_api_server_entry_pb.ListEntriesResponse) => void): grpc.ClientUnaryCall;
    listEntries(request: spire_api_server_entry_pb.ListEntriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: spire_api_server_entry_pb.ListEntriesResponse) => void): grpc.ClientUnaryCall;
    getEntry(request: spire_api_server_entry_pb.GetEntryRequest, callback: (error: grpc.ServiceError | null, response: spire_api_types_entry_pb.Entry) => void): grpc.ClientUnaryCall;
    getEntry(request: spire_api_server_entry_pb.GetEntryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: spire_api_types_entry_pb.Entry) => void): grpc.ClientUnaryCall;
    getEntry(request: spire_api_server_entry_pb.GetEntryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: spire_api_types_entry_pb.Entry) => void): grpc.ClientUnaryCall;
    batchCreateEntry(request: spire_api_server_entry_pb.BatchCreateEntryRequest, callback: (error: grpc.ServiceError | null, response: spire_api_server_entry_pb.BatchCreateEntryResponse) => void): grpc.ClientUnaryCall;
    batchCreateEntry(request: spire_api_server_entry_pb.BatchCreateEntryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: spire_api_server_entry_pb.BatchCreateEntryResponse) => void): grpc.ClientUnaryCall;
    batchCreateEntry(request: spire_api_server_entry_pb.BatchCreateEntryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: spire_api_server_entry_pb.BatchCreateEntryResponse) => void): grpc.ClientUnaryCall;
    batchUpdateEntry(request: spire_api_server_entry_pb.BatchUpdateEntryRequest, callback: (error: grpc.ServiceError | null, response: spire_api_server_entry_pb.BatchUpdateEntryResponse) => void): grpc.ClientUnaryCall;
    batchUpdateEntry(request: spire_api_server_entry_pb.BatchUpdateEntryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: spire_api_server_entry_pb.BatchUpdateEntryResponse) => void): grpc.ClientUnaryCall;
    batchUpdateEntry(request: spire_api_server_entry_pb.BatchUpdateEntryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: spire_api_server_entry_pb.BatchUpdateEntryResponse) => void): grpc.ClientUnaryCall;
    batchDeleteEntry(request: spire_api_server_entry_pb.BatchDeleteEntryRequest, callback: (error: grpc.ServiceError | null, response: spire_api_server_entry_pb.BatchDeleteEntryResponse) => void): grpc.ClientUnaryCall;
    batchDeleteEntry(request: spire_api_server_entry_pb.BatchDeleteEntryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: spire_api_server_entry_pb.BatchDeleteEntryResponse) => void): grpc.ClientUnaryCall;
    batchDeleteEntry(request: spire_api_server_entry_pb.BatchDeleteEntryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: spire_api_server_entry_pb.BatchDeleteEntryResponse) => void): grpc.ClientUnaryCall;
    getAuthorizedEntries(request: spire_api_server_entry_pb.GetAuthorizedEntriesRequest, callback: (error: grpc.ServiceError | null, response: spire_api_server_entry_pb.GetAuthorizedEntriesResponse) => void): grpc.ClientUnaryCall;
    getAuthorizedEntries(request: spire_api_server_entry_pb.GetAuthorizedEntriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: spire_api_server_entry_pb.GetAuthorizedEntriesResponse) => void): grpc.ClientUnaryCall;
    getAuthorizedEntries(request: spire_api_server_entry_pb.GetAuthorizedEntriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: spire_api_server_entry_pb.GetAuthorizedEntriesResponse) => void): grpc.ClientUnaryCall;
}

export class EntryClient extends grpc.Client implements IEntryClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public countEntries(request: spire_api_server_entry_pb.CountEntriesRequest, callback: (error: grpc.ServiceError | null, response: spire_api_server_entry_pb.CountEntriesResponse) => void): grpc.ClientUnaryCall;
    public countEntries(request: spire_api_server_entry_pb.CountEntriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: spire_api_server_entry_pb.CountEntriesResponse) => void): grpc.ClientUnaryCall;
    public countEntries(request: spire_api_server_entry_pb.CountEntriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: spire_api_server_entry_pb.CountEntriesResponse) => void): grpc.ClientUnaryCall;
    public listEntries(request: spire_api_server_entry_pb.ListEntriesRequest, callback: (error: grpc.ServiceError | null, response: spire_api_server_entry_pb.ListEntriesResponse) => void): grpc.ClientUnaryCall;
    public listEntries(request: spire_api_server_entry_pb.ListEntriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: spire_api_server_entry_pb.ListEntriesResponse) => void): grpc.ClientUnaryCall;
    public listEntries(request: spire_api_server_entry_pb.ListEntriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: spire_api_server_entry_pb.ListEntriesResponse) => void): grpc.ClientUnaryCall;
    public getEntry(request: spire_api_server_entry_pb.GetEntryRequest, callback: (error: grpc.ServiceError | null, response: spire_api_types_entry_pb.Entry) => void): grpc.ClientUnaryCall;
    public getEntry(request: spire_api_server_entry_pb.GetEntryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: spire_api_types_entry_pb.Entry) => void): grpc.ClientUnaryCall;
    public getEntry(request: spire_api_server_entry_pb.GetEntryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: spire_api_types_entry_pb.Entry) => void): grpc.ClientUnaryCall;
    public batchCreateEntry(request: spire_api_server_entry_pb.BatchCreateEntryRequest, callback: (error: grpc.ServiceError | null, response: spire_api_server_entry_pb.BatchCreateEntryResponse) => void): grpc.ClientUnaryCall;
    public batchCreateEntry(request: spire_api_server_entry_pb.BatchCreateEntryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: spire_api_server_entry_pb.BatchCreateEntryResponse) => void): grpc.ClientUnaryCall;
    public batchCreateEntry(request: spire_api_server_entry_pb.BatchCreateEntryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: spire_api_server_entry_pb.BatchCreateEntryResponse) => void): grpc.ClientUnaryCall;
    public batchUpdateEntry(request: spire_api_server_entry_pb.BatchUpdateEntryRequest, callback: (error: grpc.ServiceError | null, response: spire_api_server_entry_pb.BatchUpdateEntryResponse) => void): grpc.ClientUnaryCall;
    public batchUpdateEntry(request: spire_api_server_entry_pb.BatchUpdateEntryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: spire_api_server_entry_pb.BatchUpdateEntryResponse) => void): grpc.ClientUnaryCall;
    public batchUpdateEntry(request: spire_api_server_entry_pb.BatchUpdateEntryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: spire_api_server_entry_pb.BatchUpdateEntryResponse) => void): grpc.ClientUnaryCall;
    public batchDeleteEntry(request: spire_api_server_entry_pb.BatchDeleteEntryRequest, callback: (error: grpc.ServiceError | null, response: spire_api_server_entry_pb.BatchDeleteEntryResponse) => void): grpc.ClientUnaryCall;
    public batchDeleteEntry(request: spire_api_server_entry_pb.BatchDeleteEntryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: spire_api_server_entry_pb.BatchDeleteEntryResponse) => void): grpc.ClientUnaryCall;
    public batchDeleteEntry(request: spire_api_server_entry_pb.BatchDeleteEntryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: spire_api_server_entry_pb.BatchDeleteEntryResponse) => void): grpc.ClientUnaryCall;
    public getAuthorizedEntries(request: spire_api_server_entry_pb.GetAuthorizedEntriesRequest, callback: (error: grpc.ServiceError | null, response: spire_api_server_entry_pb.GetAuthorizedEntriesResponse) => void): grpc.ClientUnaryCall;
    public getAuthorizedEntries(request: spire_api_server_entry_pb.GetAuthorizedEntriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: spire_api_server_entry_pb.GetAuthorizedEntriesResponse) => void): grpc.ClientUnaryCall;
    public getAuthorizedEntries(request: spire_api_server_entry_pb.GetAuthorizedEntriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: spire_api_server_entry_pb.GetAuthorizedEntriesResponse) => void): grpc.ClientUnaryCall;
}
