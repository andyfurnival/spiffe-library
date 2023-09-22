// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var spire_workload_pb = require('../spire/workload_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

function serialize_JWTBundlesRequest(arg) {
  if (!(arg instanceof spire_workload_pb.JWTBundlesRequest)) {
    throw new Error('Expected argument of type JWTBundlesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_JWTBundlesRequest(buffer_arg) {
  return spire_workload_pb.JWTBundlesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_JWTBundlesResponse(arg) {
  if (!(arg instanceof spire_workload_pb.JWTBundlesResponse)) {
    throw new Error('Expected argument of type JWTBundlesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_JWTBundlesResponse(buffer_arg) {
  return spire_workload_pb.JWTBundlesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_JWTSVIDRequest(arg) {
  if (!(arg instanceof spire_workload_pb.JWTSVIDRequest)) {
    throw new Error('Expected argument of type JWTSVIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_JWTSVIDRequest(buffer_arg) {
  return spire_workload_pb.JWTSVIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_JWTSVIDResponse(arg) {
  if (!(arg instanceof spire_workload_pb.JWTSVIDResponse)) {
    throw new Error('Expected argument of type JWTSVIDResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_JWTSVIDResponse(buffer_arg) {
  return spire_workload_pb.JWTSVIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ValidateJWTSVIDRequest(arg) {
  if (!(arg instanceof spire_workload_pb.ValidateJWTSVIDRequest)) {
    throw new Error('Expected argument of type ValidateJWTSVIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ValidateJWTSVIDRequest(buffer_arg) {
  return spire_workload_pb.ValidateJWTSVIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ValidateJWTSVIDResponse(arg) {
  if (!(arg instanceof spire_workload_pb.ValidateJWTSVIDResponse)) {
    throw new Error('Expected argument of type ValidateJWTSVIDResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ValidateJWTSVIDResponse(buffer_arg) {
  return spire_workload_pb.ValidateJWTSVIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_X509BundlesRequest(arg) {
  if (!(arg instanceof spire_workload_pb.X509BundlesRequest)) {
    throw new Error('Expected argument of type X509BundlesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_X509BundlesRequest(buffer_arg) {
  return spire_workload_pb.X509BundlesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_X509BundlesResponse(arg) {
  if (!(arg instanceof spire_workload_pb.X509BundlesResponse)) {
    throw new Error('Expected argument of type X509BundlesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_X509BundlesResponse(buffer_arg) {
  return spire_workload_pb.X509BundlesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_X509SVIDRequest(arg) {
  if (!(arg instanceof spire_workload_pb.X509SVIDRequest)) {
    throw new Error('Expected argument of type X509SVIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_X509SVIDRequest(buffer_arg) {
  return spire_workload_pb.X509SVIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_X509SVIDResponse(arg) {
  if (!(arg instanceof spire_workload_pb.X509SVIDResponse)) {
    throw new Error('Expected argument of type X509SVIDResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_X509SVIDResponse(buffer_arg) {
  return spire_workload_pb.X509SVIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SpiffeWorkloadAPIService = exports.SpiffeWorkloadAPIService = {
  // Fetch X.509-SVIDs for all SPIFFE identities the workload is entitled to,
// as well as related information like trust bundles and CRLs. As this
// information changes, subsequent messages will be streamed from the
// server.
fetchX509SVID: {
    path: '/SpiffeWorkloadAPI/FetchX509SVID',
    requestStream: false,
    responseStream: true,
    requestType: spire_workload_pb.X509SVIDRequest,
    responseType: spire_workload_pb.X509SVIDResponse,
    requestSerialize: serialize_X509SVIDRequest,
    requestDeserialize: deserialize_X509SVIDRequest,
    responseSerialize: serialize_X509SVIDResponse,
    responseDeserialize: deserialize_X509SVIDResponse,
  },
  // Fetch trust bundles and CRLs. Useful for clients that only need to
// validate SVIDs without obtaining an SVID for themself. As this
// information changes, subsequent messages will be streamed from the
// server.
fetchX509Bundles: {
    path: '/SpiffeWorkloadAPI/FetchX509Bundles',
    requestStream: false,
    responseStream: true,
    requestType: spire_workload_pb.X509BundlesRequest,
    responseType: spire_workload_pb.X509BundlesResponse,
    requestSerialize: serialize_X509BundlesRequest,
    requestDeserialize: deserialize_X509BundlesRequest,
    responseSerialize: serialize_X509BundlesResponse,
    responseDeserialize: deserialize_X509BundlesResponse,
  },
  // ///////////////////////////////////////////////////////////////////////
// JWT-SVID Profile
// ///////////////////////////////////////////////////////////////////////
//
// Fetch JWT-SVIDs for all SPIFFE identities the workload is entitled to,
// for the requested audience. If an optional SPIFFE ID is requested, only
// the JWT-SVID for that SPIFFE ID is returned.
fetchJWTSVID: {
    path: '/SpiffeWorkloadAPI/FetchJWTSVID',
    requestStream: false,
    responseStream: false,
    requestType: spire_workload_pb.JWTSVIDRequest,
    responseType: spire_workload_pb.JWTSVIDResponse,
    requestSerialize: serialize_JWTSVIDRequest,
    requestDeserialize: deserialize_JWTSVIDRequest,
    responseSerialize: serialize_JWTSVIDResponse,
    responseDeserialize: deserialize_JWTSVIDResponse,
  },
  // Fetches the JWT bundles, formatted as JWKS documents, keyed by the
// SPIFFE ID of the trust domain. As this information changes, subsequent
// messages will be streamed from the server.
fetchJWTBundles: {
    path: '/SpiffeWorkloadAPI/FetchJWTBundles',
    requestStream: false,
    responseStream: true,
    requestType: spire_workload_pb.JWTBundlesRequest,
    responseType: spire_workload_pb.JWTBundlesResponse,
    requestSerialize: serialize_JWTBundlesRequest,
    requestDeserialize: deserialize_JWTBundlesRequest,
    responseSerialize: serialize_JWTBundlesResponse,
    responseDeserialize: deserialize_JWTBundlesResponse,
  },
  // Validates a JWT-SVID against the requested audience. Returns the SPIFFE
// ID of the JWT-SVID and JWT claims.
validateJWTSVID: {
    path: '/SpiffeWorkloadAPI/ValidateJWTSVID',
    requestStream: false,
    responseStream: false,
    requestType: spire_workload_pb.ValidateJWTSVIDRequest,
    responseType: spire_workload_pb.ValidateJWTSVIDResponse,
    requestSerialize: serialize_ValidateJWTSVIDRequest,
    requestDeserialize: deserialize_ValidateJWTSVIDRequest,
    responseSerialize: serialize_ValidateJWTSVIDResponse,
    responseDeserialize: deserialize_ValidateJWTSVIDResponse,
  },
};

exports.SpiffeWorkloadAPIClient = grpc.makeGenericClientConstructor(SpiffeWorkloadAPIService);
// ///////////////////////////////////////////////////////////////////////
// X509-SVID Profile
// ///////////////////////////////////////////////////////////////////////
