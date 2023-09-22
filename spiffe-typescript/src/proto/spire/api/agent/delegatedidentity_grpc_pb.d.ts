// package: spire.api.agent.delegatedidentity.v1
// file: spire/api/agent/delegatedidentity.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as spire_api_agent_delegatedidentity_pb from "../../../spire/api/agent/delegatedidentity_pb";
import * as spire_api_types_selector_pb from "../../../spire/api/types/selector_pb";
import * as spire_api_types_x509svid_pb from "../../../spire/api/types/x509svid_pb";
import * as spire_api_types_jwtsvid_pb from "../../../spire/api/types/jwtsvid_pb";

interface IDelegatedIdentityService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    subscribeToX509SVIDs: IDelegatedIdentityService_ISubscribeToX509SVIDs;
    subscribeToX509Bundles: IDelegatedIdentityService_ISubscribeToX509Bundles;
    fetchJWTSVIDs: IDelegatedIdentityService_IFetchJWTSVIDs;
    subscribeToJWTBundles: IDelegatedIdentityService_ISubscribeToJWTBundles;
}

interface IDelegatedIdentityService_ISubscribeToX509SVIDs extends grpc.MethodDefinition<spire_api_agent_delegatedidentity_pb.SubscribeToX509SVIDsRequest, spire_api_agent_delegatedidentity_pb.SubscribeToX509SVIDsResponse> {
    path: "/spire.api.agent.delegatedidentity.v1.DelegatedIdentity/SubscribeToX509SVIDs";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<spire_api_agent_delegatedidentity_pb.SubscribeToX509SVIDsRequest>;
    requestDeserialize: grpc.deserialize<spire_api_agent_delegatedidentity_pb.SubscribeToX509SVIDsRequest>;
    responseSerialize: grpc.serialize<spire_api_agent_delegatedidentity_pb.SubscribeToX509SVIDsResponse>;
    responseDeserialize: grpc.deserialize<spire_api_agent_delegatedidentity_pb.SubscribeToX509SVIDsResponse>;
}
interface IDelegatedIdentityService_ISubscribeToX509Bundles extends grpc.MethodDefinition<spire_api_agent_delegatedidentity_pb.SubscribeToX509BundlesRequest, spire_api_agent_delegatedidentity_pb.SubscribeToX509BundlesResponse> {
    path: "/spire.api.agent.delegatedidentity.v1.DelegatedIdentity/SubscribeToX509Bundles";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<spire_api_agent_delegatedidentity_pb.SubscribeToX509BundlesRequest>;
    requestDeserialize: grpc.deserialize<spire_api_agent_delegatedidentity_pb.SubscribeToX509BundlesRequest>;
    responseSerialize: grpc.serialize<spire_api_agent_delegatedidentity_pb.SubscribeToX509BundlesResponse>;
    responseDeserialize: grpc.deserialize<spire_api_agent_delegatedidentity_pb.SubscribeToX509BundlesResponse>;
}
interface IDelegatedIdentityService_IFetchJWTSVIDs extends grpc.MethodDefinition<spire_api_agent_delegatedidentity_pb.FetchJWTSVIDsRequest, spire_api_agent_delegatedidentity_pb.FetchJWTSVIDsResponse> {
    path: "/spire.api.agent.delegatedidentity.v1.DelegatedIdentity/FetchJWTSVIDs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<spire_api_agent_delegatedidentity_pb.FetchJWTSVIDsRequest>;
    requestDeserialize: grpc.deserialize<spire_api_agent_delegatedidentity_pb.FetchJWTSVIDsRequest>;
    responseSerialize: grpc.serialize<spire_api_agent_delegatedidentity_pb.FetchJWTSVIDsResponse>;
    responseDeserialize: grpc.deserialize<spire_api_agent_delegatedidentity_pb.FetchJWTSVIDsResponse>;
}
interface IDelegatedIdentityService_ISubscribeToJWTBundles extends grpc.MethodDefinition<spire_api_agent_delegatedidentity_pb.SubscribeToJWTBundlesRequest, spire_api_agent_delegatedidentity_pb.SubscribeToJWTBundlesResponse> {
    path: "/spire.api.agent.delegatedidentity.v1.DelegatedIdentity/SubscribeToJWTBundles";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<spire_api_agent_delegatedidentity_pb.SubscribeToJWTBundlesRequest>;
    requestDeserialize: grpc.deserialize<spire_api_agent_delegatedidentity_pb.SubscribeToJWTBundlesRequest>;
    responseSerialize: grpc.serialize<spire_api_agent_delegatedidentity_pb.SubscribeToJWTBundlesResponse>;
    responseDeserialize: grpc.deserialize<spire_api_agent_delegatedidentity_pb.SubscribeToJWTBundlesResponse>;
}

export const DelegatedIdentityService: IDelegatedIdentityService;

export interface IDelegatedIdentityServer {
    subscribeToX509SVIDs: grpc.handleServerStreamingCall<spire_api_agent_delegatedidentity_pb.SubscribeToX509SVIDsRequest, spire_api_agent_delegatedidentity_pb.SubscribeToX509SVIDsResponse>;
    subscribeToX509Bundles: grpc.handleServerStreamingCall<spire_api_agent_delegatedidentity_pb.SubscribeToX509BundlesRequest, spire_api_agent_delegatedidentity_pb.SubscribeToX509BundlesResponse>;
    fetchJWTSVIDs: grpc.handleUnaryCall<spire_api_agent_delegatedidentity_pb.FetchJWTSVIDsRequest, spire_api_agent_delegatedidentity_pb.FetchJWTSVIDsResponse>;
    subscribeToJWTBundles: grpc.handleServerStreamingCall<spire_api_agent_delegatedidentity_pb.SubscribeToJWTBundlesRequest, spire_api_agent_delegatedidentity_pb.SubscribeToJWTBundlesResponse>;
}

export interface IDelegatedIdentityClient {
    subscribeToX509SVIDs(request: spire_api_agent_delegatedidentity_pb.SubscribeToX509SVIDsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<spire_api_agent_delegatedidentity_pb.SubscribeToX509SVIDsResponse>;
    subscribeToX509SVIDs(request: spire_api_agent_delegatedidentity_pb.SubscribeToX509SVIDsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<spire_api_agent_delegatedidentity_pb.SubscribeToX509SVIDsResponse>;
    subscribeToX509Bundles(request: spire_api_agent_delegatedidentity_pb.SubscribeToX509BundlesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<spire_api_agent_delegatedidentity_pb.SubscribeToX509BundlesResponse>;
    subscribeToX509Bundles(request: spire_api_agent_delegatedidentity_pb.SubscribeToX509BundlesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<spire_api_agent_delegatedidentity_pb.SubscribeToX509BundlesResponse>;
    fetchJWTSVIDs(request: spire_api_agent_delegatedidentity_pb.FetchJWTSVIDsRequest, callback: (error: grpc.ServiceError | null, response: spire_api_agent_delegatedidentity_pb.FetchJWTSVIDsResponse) => void): grpc.ClientUnaryCall;
    fetchJWTSVIDs(request: spire_api_agent_delegatedidentity_pb.FetchJWTSVIDsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: spire_api_agent_delegatedidentity_pb.FetchJWTSVIDsResponse) => void): grpc.ClientUnaryCall;
    fetchJWTSVIDs(request: spire_api_agent_delegatedidentity_pb.FetchJWTSVIDsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: spire_api_agent_delegatedidentity_pb.FetchJWTSVIDsResponse) => void): grpc.ClientUnaryCall;
    subscribeToJWTBundles(request: spire_api_agent_delegatedidentity_pb.SubscribeToJWTBundlesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<spire_api_agent_delegatedidentity_pb.SubscribeToJWTBundlesResponse>;
    subscribeToJWTBundles(request: spire_api_agent_delegatedidentity_pb.SubscribeToJWTBundlesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<spire_api_agent_delegatedidentity_pb.SubscribeToJWTBundlesResponse>;
}

export class DelegatedIdentityClient extends grpc.Client implements IDelegatedIdentityClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public subscribeToX509SVIDs(request: spire_api_agent_delegatedidentity_pb.SubscribeToX509SVIDsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<spire_api_agent_delegatedidentity_pb.SubscribeToX509SVIDsResponse>;
    public subscribeToX509SVIDs(request: spire_api_agent_delegatedidentity_pb.SubscribeToX509SVIDsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<spire_api_agent_delegatedidentity_pb.SubscribeToX509SVIDsResponse>;
    public subscribeToX509Bundles(request: spire_api_agent_delegatedidentity_pb.SubscribeToX509BundlesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<spire_api_agent_delegatedidentity_pb.SubscribeToX509BundlesResponse>;
    public subscribeToX509Bundles(request: spire_api_agent_delegatedidentity_pb.SubscribeToX509BundlesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<spire_api_agent_delegatedidentity_pb.SubscribeToX509BundlesResponse>;
    public fetchJWTSVIDs(request: spire_api_agent_delegatedidentity_pb.FetchJWTSVIDsRequest, callback: (error: grpc.ServiceError | null, response: spire_api_agent_delegatedidentity_pb.FetchJWTSVIDsResponse) => void): grpc.ClientUnaryCall;
    public fetchJWTSVIDs(request: spire_api_agent_delegatedidentity_pb.FetchJWTSVIDsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: spire_api_agent_delegatedidentity_pb.FetchJWTSVIDsResponse) => void): grpc.ClientUnaryCall;
    public fetchJWTSVIDs(request: spire_api_agent_delegatedidentity_pb.FetchJWTSVIDsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: spire_api_agent_delegatedidentity_pb.FetchJWTSVIDsResponse) => void): grpc.ClientUnaryCall;
    public subscribeToJWTBundles(request: spire_api_agent_delegatedidentity_pb.SubscribeToJWTBundlesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<spire_api_agent_delegatedidentity_pb.SubscribeToJWTBundlesResponse>;
    public subscribeToJWTBundles(request: spire_api_agent_delegatedidentity_pb.SubscribeToJWTBundlesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<spire_api_agent_delegatedidentity_pb.SubscribeToJWTBundlesResponse>;
}
