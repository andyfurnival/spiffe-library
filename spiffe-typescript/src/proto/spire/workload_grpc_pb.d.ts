// package: 
// file: spire/workload.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as spire_workload_pb from "../spire/workload_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

interface ISpiffeWorkloadAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    fetchX509SVID: ISpiffeWorkloadAPIService_IFetchX509SVID;
    fetchX509Bundles: ISpiffeWorkloadAPIService_IFetchX509Bundles;
    fetchJWTSVID: ISpiffeWorkloadAPIService_IFetchJWTSVID;
    fetchJWTBundles: ISpiffeWorkloadAPIService_IFetchJWTBundles;
    validateJWTSVID: ISpiffeWorkloadAPIService_IValidateJWTSVID;
}

interface ISpiffeWorkloadAPIService_IFetchX509SVID extends grpc.MethodDefinition<spire_workload_pb.X509SVIDRequest, spire_workload_pb.X509SVIDResponse> {
    path: "/SpiffeWorkloadAPI/FetchX509SVID";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<spire_workload_pb.X509SVIDRequest>;
    requestDeserialize: grpc.deserialize<spire_workload_pb.X509SVIDRequest>;
    responseSerialize: grpc.serialize<spire_workload_pb.X509SVIDResponse>;
    responseDeserialize: grpc.deserialize<spire_workload_pb.X509SVIDResponse>;
}
interface ISpiffeWorkloadAPIService_IFetchX509Bundles extends grpc.MethodDefinition<spire_workload_pb.X509BundlesRequest, spire_workload_pb.X509BundlesResponse> {
    path: "/SpiffeWorkloadAPI/FetchX509Bundles";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<spire_workload_pb.X509BundlesRequest>;
    requestDeserialize: grpc.deserialize<spire_workload_pb.X509BundlesRequest>;
    responseSerialize: grpc.serialize<spire_workload_pb.X509BundlesResponse>;
    responseDeserialize: grpc.deserialize<spire_workload_pb.X509BundlesResponse>;
}
interface ISpiffeWorkloadAPIService_IFetchJWTSVID extends grpc.MethodDefinition<spire_workload_pb.JWTSVIDRequest, spire_workload_pb.JWTSVIDResponse> {
    path: "/SpiffeWorkloadAPI/FetchJWTSVID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<spire_workload_pb.JWTSVIDRequest>;
    requestDeserialize: grpc.deserialize<spire_workload_pb.JWTSVIDRequest>;
    responseSerialize: grpc.serialize<spire_workload_pb.JWTSVIDResponse>;
    responseDeserialize: grpc.deserialize<spire_workload_pb.JWTSVIDResponse>;
}
interface ISpiffeWorkloadAPIService_IFetchJWTBundles extends grpc.MethodDefinition<spire_workload_pb.JWTBundlesRequest, spire_workload_pb.JWTBundlesResponse> {
    path: "/SpiffeWorkloadAPI/FetchJWTBundles";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<spire_workload_pb.JWTBundlesRequest>;
    requestDeserialize: grpc.deserialize<spire_workload_pb.JWTBundlesRequest>;
    responseSerialize: grpc.serialize<spire_workload_pb.JWTBundlesResponse>;
    responseDeserialize: grpc.deserialize<spire_workload_pb.JWTBundlesResponse>;
}
interface ISpiffeWorkloadAPIService_IValidateJWTSVID extends grpc.MethodDefinition<spire_workload_pb.ValidateJWTSVIDRequest, spire_workload_pb.ValidateJWTSVIDResponse> {
    path: "/SpiffeWorkloadAPI/ValidateJWTSVID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<spire_workload_pb.ValidateJWTSVIDRequest>;
    requestDeserialize: grpc.deserialize<spire_workload_pb.ValidateJWTSVIDRequest>;
    responseSerialize: grpc.serialize<spire_workload_pb.ValidateJWTSVIDResponse>;
    responseDeserialize: grpc.deserialize<spire_workload_pb.ValidateJWTSVIDResponse>;
}

export const SpiffeWorkloadAPIService: ISpiffeWorkloadAPIService;

export interface ISpiffeWorkloadAPIServer {
    fetchX509SVID: grpc.handleServerStreamingCall<spire_workload_pb.X509SVIDRequest, spire_workload_pb.X509SVIDResponse>;
    fetchX509Bundles: grpc.handleServerStreamingCall<spire_workload_pb.X509BundlesRequest, spire_workload_pb.X509BundlesResponse>;
    fetchJWTSVID: grpc.handleUnaryCall<spire_workload_pb.JWTSVIDRequest, spire_workload_pb.JWTSVIDResponse>;
    fetchJWTBundles: grpc.handleServerStreamingCall<spire_workload_pb.JWTBundlesRequest, spire_workload_pb.JWTBundlesResponse>;
    validateJWTSVID: grpc.handleUnaryCall<spire_workload_pb.ValidateJWTSVIDRequest, spire_workload_pb.ValidateJWTSVIDResponse>;
}

export interface ISpiffeWorkloadAPIClient {
    fetchX509SVID(request: spire_workload_pb.X509SVIDRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<spire_workload_pb.X509SVIDResponse>;
    fetchX509SVID(request: spire_workload_pb.X509SVIDRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<spire_workload_pb.X509SVIDResponse>;
    fetchX509Bundles(request: spire_workload_pb.X509BundlesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<spire_workload_pb.X509BundlesResponse>;
    fetchX509Bundles(request: spire_workload_pb.X509BundlesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<spire_workload_pb.X509BundlesResponse>;
    fetchJWTSVID(request: spire_workload_pb.JWTSVIDRequest, callback: (error: grpc.ServiceError | null, response: spire_workload_pb.JWTSVIDResponse) => void): grpc.ClientUnaryCall;
    fetchJWTSVID(request: spire_workload_pb.JWTSVIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: spire_workload_pb.JWTSVIDResponse) => void): grpc.ClientUnaryCall;
    fetchJWTSVID(request: spire_workload_pb.JWTSVIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: spire_workload_pb.JWTSVIDResponse) => void): grpc.ClientUnaryCall;
    fetchJWTBundles(request: spire_workload_pb.JWTBundlesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<spire_workload_pb.JWTBundlesResponse>;
    fetchJWTBundles(request: spire_workload_pb.JWTBundlesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<spire_workload_pb.JWTBundlesResponse>;
    validateJWTSVID(request: spire_workload_pb.ValidateJWTSVIDRequest, callback: (error: grpc.ServiceError | null, response: spire_workload_pb.ValidateJWTSVIDResponse) => void): grpc.ClientUnaryCall;
    validateJWTSVID(request: spire_workload_pb.ValidateJWTSVIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: spire_workload_pb.ValidateJWTSVIDResponse) => void): grpc.ClientUnaryCall;
    validateJWTSVID(request: spire_workload_pb.ValidateJWTSVIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: spire_workload_pb.ValidateJWTSVIDResponse) => void): grpc.ClientUnaryCall;
}

export class SpiffeWorkloadAPIClient extends grpc.Client implements ISpiffeWorkloadAPIClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public fetchX509SVID(request: spire_workload_pb.X509SVIDRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<spire_workload_pb.X509SVIDResponse>;
    public fetchX509SVID(request: spire_workload_pb.X509SVIDRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<spire_workload_pb.X509SVIDResponse>;
    public fetchX509Bundles(request: spire_workload_pb.X509BundlesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<spire_workload_pb.X509BundlesResponse>;
    public fetchX509Bundles(request: spire_workload_pb.X509BundlesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<spire_workload_pb.X509BundlesResponse>;
    public fetchJWTSVID(request: spire_workload_pb.JWTSVIDRequest, callback: (error: grpc.ServiceError | null, response: spire_workload_pb.JWTSVIDResponse) => void): grpc.ClientUnaryCall;
    public fetchJWTSVID(request: spire_workload_pb.JWTSVIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: spire_workload_pb.JWTSVIDResponse) => void): grpc.ClientUnaryCall;
    public fetchJWTSVID(request: spire_workload_pb.JWTSVIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: spire_workload_pb.JWTSVIDResponse) => void): grpc.ClientUnaryCall;
    public fetchJWTBundles(request: spire_workload_pb.JWTBundlesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<spire_workload_pb.JWTBundlesResponse>;
    public fetchJWTBundles(request: spire_workload_pb.JWTBundlesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<spire_workload_pb.JWTBundlesResponse>;
    public validateJWTSVID(request: spire_workload_pb.ValidateJWTSVIDRequest, callback: (error: grpc.ServiceError | null, response: spire_workload_pb.ValidateJWTSVIDResponse) => void): grpc.ClientUnaryCall;
    public validateJWTSVID(request: spire_workload_pb.ValidateJWTSVIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: spire_workload_pb.ValidateJWTSVIDResponse) => void): grpc.ClientUnaryCall;
    public validateJWTSVID(request: spire_workload_pb.ValidateJWTSVIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: spire_workload_pb.ValidateJWTSVIDResponse) => void): grpc.ClientUnaryCall;
}
