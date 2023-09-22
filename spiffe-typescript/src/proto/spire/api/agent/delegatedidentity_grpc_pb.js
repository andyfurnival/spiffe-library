// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var spire_api_agent_delegatedidentity_pb = require('../../../spire/api/agent/delegatedidentity_pb.js');
var spire_api_types_selector_pb = require('../../../spire/api/types/selector_pb.js');
var spire_api_types_x509svid_pb = require('../../../spire/api/types/x509svid_pb.js');
var spire_api_types_jwtsvid_pb = require('../../../spire/api/types/jwtsvid_pb.js');

function serialize_spire_api_agent_delegatedidentity_v1_FetchJWTSVIDsRequest(arg) {
  if (!(arg instanceof spire_api_agent_delegatedidentity_pb.FetchJWTSVIDsRequest)) {
    throw new Error('Expected argument of type spire.api.agent.delegatedidentity.v1.FetchJWTSVIDsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_spire_api_agent_delegatedidentity_v1_FetchJWTSVIDsRequest(buffer_arg) {
  return spire_api_agent_delegatedidentity_pb.FetchJWTSVIDsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_spire_api_agent_delegatedidentity_v1_FetchJWTSVIDsResponse(arg) {
  if (!(arg instanceof spire_api_agent_delegatedidentity_pb.FetchJWTSVIDsResponse)) {
    throw new Error('Expected argument of type spire.api.agent.delegatedidentity.v1.FetchJWTSVIDsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_spire_api_agent_delegatedidentity_v1_FetchJWTSVIDsResponse(buffer_arg) {
  return spire_api_agent_delegatedidentity_pb.FetchJWTSVIDsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_spire_api_agent_delegatedidentity_v1_SubscribeToJWTBundlesRequest(arg) {
  if (!(arg instanceof spire_api_agent_delegatedidentity_pb.SubscribeToJWTBundlesRequest)) {
    throw new Error('Expected argument of type spire.api.agent.delegatedidentity.v1.SubscribeToJWTBundlesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_spire_api_agent_delegatedidentity_v1_SubscribeToJWTBundlesRequest(buffer_arg) {
  return spire_api_agent_delegatedidentity_pb.SubscribeToJWTBundlesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_spire_api_agent_delegatedidentity_v1_SubscribeToJWTBundlesResponse(arg) {
  if (!(arg instanceof spire_api_agent_delegatedidentity_pb.SubscribeToJWTBundlesResponse)) {
    throw new Error('Expected argument of type spire.api.agent.delegatedidentity.v1.SubscribeToJWTBundlesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_spire_api_agent_delegatedidentity_v1_SubscribeToJWTBundlesResponse(buffer_arg) {
  return spire_api_agent_delegatedidentity_pb.SubscribeToJWTBundlesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_spire_api_agent_delegatedidentity_v1_SubscribeToX509BundlesRequest(arg) {
  if (!(arg instanceof spire_api_agent_delegatedidentity_pb.SubscribeToX509BundlesRequest)) {
    throw new Error('Expected argument of type spire.api.agent.delegatedidentity.v1.SubscribeToX509BundlesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_spire_api_agent_delegatedidentity_v1_SubscribeToX509BundlesRequest(buffer_arg) {
  return spire_api_agent_delegatedidentity_pb.SubscribeToX509BundlesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_spire_api_agent_delegatedidentity_v1_SubscribeToX509BundlesResponse(arg) {
  if (!(arg instanceof spire_api_agent_delegatedidentity_pb.SubscribeToX509BundlesResponse)) {
    throw new Error('Expected argument of type spire.api.agent.delegatedidentity.v1.SubscribeToX509BundlesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_spire_api_agent_delegatedidentity_v1_SubscribeToX509BundlesResponse(buffer_arg) {
  return spire_api_agent_delegatedidentity_pb.SubscribeToX509BundlesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_spire_api_agent_delegatedidentity_v1_SubscribeToX509SVIDsRequest(arg) {
  if (!(arg instanceof spire_api_agent_delegatedidentity_pb.SubscribeToX509SVIDsRequest)) {
    throw new Error('Expected argument of type spire.api.agent.delegatedidentity.v1.SubscribeToX509SVIDsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_spire_api_agent_delegatedidentity_v1_SubscribeToX509SVIDsRequest(buffer_arg) {
  return spire_api_agent_delegatedidentity_pb.SubscribeToX509SVIDsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_spire_api_agent_delegatedidentity_v1_SubscribeToX509SVIDsResponse(arg) {
  if (!(arg instanceof spire_api_agent_delegatedidentity_pb.SubscribeToX509SVIDsResponse)) {
    throw new Error('Expected argument of type spire.api.agent.delegatedidentity.v1.SubscribeToX509SVIDsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_spire_api_agent_delegatedidentity_v1_SubscribeToX509SVIDsResponse(buffer_arg) {
  return spire_api_agent_delegatedidentity_pb.SubscribeToX509SVIDsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The delegatedIdentity service provides an interface to get the SVIDs of other
// workloads on the host. This service is intended for use cases where a process
// (different than the workload one) should access the workload's SVID to
// perform actions on behalf of the workload. One example of is using a single
// node instance of Envoy that upgrades TCP connections for different processes
// running in such a node.
//
// The caller must be local and its identity must be listed in the allowed
// clients on the spire-agent configuration.
var DelegatedIdentityService = exports.DelegatedIdentityService = {
  // Subscribe to get X.509-SVIDs for workloads that match the given selectors.
// The lifetime of the subscription aligns to the lifetime of the stream.
subscribeToX509SVIDs: {
    path: '/spire.api.agent.delegatedidentity.v1.DelegatedIdentity/SubscribeToX509SVIDs',
    requestStream: false,
    responseStream: true,
    requestType: spire_api_agent_delegatedidentity_pb.SubscribeToX509SVIDsRequest,
    responseType: spire_api_agent_delegatedidentity_pb.SubscribeToX509SVIDsResponse,
    requestSerialize: serialize_spire_api_agent_delegatedidentity_v1_SubscribeToX509SVIDsRequest,
    requestDeserialize: deserialize_spire_api_agent_delegatedidentity_v1_SubscribeToX509SVIDsRequest,
    responseSerialize: serialize_spire_api_agent_delegatedidentity_v1_SubscribeToX509SVIDsResponse,
    responseDeserialize: deserialize_spire_api_agent_delegatedidentity_v1_SubscribeToX509SVIDsResponse,
  },
  // Subscribe to get local and all federated bundles.
// The lifetime of the subscription aligns to the lifetime of the stream.
subscribeToX509Bundles: {
    path: '/spire.api.agent.delegatedidentity.v1.DelegatedIdentity/SubscribeToX509Bundles',
    requestStream: false,
    responseStream: true,
    requestType: spire_api_agent_delegatedidentity_pb.SubscribeToX509BundlesRequest,
    responseType: spire_api_agent_delegatedidentity_pb.SubscribeToX509BundlesResponse,
    requestSerialize: serialize_spire_api_agent_delegatedidentity_v1_SubscribeToX509BundlesRequest,
    requestDeserialize: deserialize_spire_api_agent_delegatedidentity_v1_SubscribeToX509BundlesRequest,
    responseSerialize: serialize_spire_api_agent_delegatedidentity_v1_SubscribeToX509BundlesResponse,
    responseDeserialize: deserialize_spire_api_agent_delegatedidentity_v1_SubscribeToX509BundlesResponse,
  },
  // Fetch JWT-SVIDs for workloads that match the given selectors, and
// for the requested audience.
fetchJWTSVIDs: {
    path: '/spire.api.agent.delegatedidentity.v1.DelegatedIdentity/FetchJWTSVIDs',
    requestStream: false,
    responseStream: false,
    requestType: spire_api_agent_delegatedidentity_pb.FetchJWTSVIDsRequest,
    responseType: spire_api_agent_delegatedidentity_pb.FetchJWTSVIDsResponse,
    requestSerialize: serialize_spire_api_agent_delegatedidentity_v1_FetchJWTSVIDsRequest,
    requestDeserialize: deserialize_spire_api_agent_delegatedidentity_v1_FetchJWTSVIDsRequest,
    responseSerialize: serialize_spire_api_agent_delegatedidentity_v1_FetchJWTSVIDsResponse,
    responseDeserialize: deserialize_spire_api_agent_delegatedidentity_v1_FetchJWTSVIDsResponse,
  },
  // Subscribe to get local and all federated JWKS bundles.
// The lifetime of the subscription aligns to the lifetime of the stream.
subscribeToJWTBundles: {
    path: '/spire.api.agent.delegatedidentity.v1.DelegatedIdentity/SubscribeToJWTBundles',
    requestStream: false,
    responseStream: true,
    requestType: spire_api_agent_delegatedidentity_pb.SubscribeToJWTBundlesRequest,
    responseType: spire_api_agent_delegatedidentity_pb.SubscribeToJWTBundlesResponse,
    requestSerialize: serialize_spire_api_agent_delegatedidentity_v1_SubscribeToJWTBundlesRequest,
    requestDeserialize: deserialize_spire_api_agent_delegatedidentity_v1_SubscribeToJWTBundlesRequest,
    responseSerialize: serialize_spire_api_agent_delegatedidentity_v1_SubscribeToJWTBundlesResponse,
    responseDeserialize: deserialize_spire_api_agent_delegatedidentity_v1_SubscribeToJWTBundlesResponse,
  },
};

exports.DelegatedIdentityClient = grpc.makeGenericClientConstructor(DelegatedIdentityService);
