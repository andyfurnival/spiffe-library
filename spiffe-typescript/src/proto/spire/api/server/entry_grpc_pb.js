// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var spire_api_server_entry_pb = require('../../../spire/api/server/entry_pb.js');
var spire_api_types_entry_pb = require('../../../spire/api/types/entry_pb.js');
var spire_api_types_federateswith_pb = require('../../../spire/api/types/federateswith_pb.js');
var spire_api_types_selector_pb = require('../../../spire/api/types/selector_pb.js');
var spire_api_types_spiffeid_pb = require('../../../spire/api/types/spiffeid_pb.js');
var spire_api_types_status_pb = require('../../../spire/api/types/status_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');

function serialize_spire_api_server_entry_v1_BatchCreateEntryRequest(arg) {
  if (!(arg instanceof spire_api_server_entry_pb.BatchCreateEntryRequest)) {
    throw new Error('Expected argument of type spire.api.server.entry.v1.BatchCreateEntryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_spire_api_server_entry_v1_BatchCreateEntryRequest(buffer_arg) {
  return spire_api_server_entry_pb.BatchCreateEntryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_spire_api_server_entry_v1_BatchCreateEntryResponse(arg) {
  if (!(arg instanceof spire_api_server_entry_pb.BatchCreateEntryResponse)) {
    throw new Error('Expected argument of type spire.api.server.entry.v1.BatchCreateEntryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_spire_api_server_entry_v1_BatchCreateEntryResponse(buffer_arg) {
  return spire_api_server_entry_pb.BatchCreateEntryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_spire_api_server_entry_v1_BatchDeleteEntryRequest(arg) {
  if (!(arg instanceof spire_api_server_entry_pb.BatchDeleteEntryRequest)) {
    throw new Error('Expected argument of type spire.api.server.entry.v1.BatchDeleteEntryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_spire_api_server_entry_v1_BatchDeleteEntryRequest(buffer_arg) {
  return spire_api_server_entry_pb.BatchDeleteEntryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_spire_api_server_entry_v1_BatchDeleteEntryResponse(arg) {
  if (!(arg instanceof spire_api_server_entry_pb.BatchDeleteEntryResponse)) {
    throw new Error('Expected argument of type spire.api.server.entry.v1.BatchDeleteEntryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_spire_api_server_entry_v1_BatchDeleteEntryResponse(buffer_arg) {
  return spire_api_server_entry_pb.BatchDeleteEntryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_spire_api_server_entry_v1_BatchUpdateEntryRequest(arg) {
  if (!(arg instanceof spire_api_server_entry_pb.BatchUpdateEntryRequest)) {
    throw new Error('Expected argument of type spire.api.server.entry.v1.BatchUpdateEntryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_spire_api_server_entry_v1_BatchUpdateEntryRequest(buffer_arg) {
  return spire_api_server_entry_pb.BatchUpdateEntryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_spire_api_server_entry_v1_BatchUpdateEntryResponse(arg) {
  if (!(arg instanceof spire_api_server_entry_pb.BatchUpdateEntryResponse)) {
    throw new Error('Expected argument of type spire.api.server.entry.v1.BatchUpdateEntryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_spire_api_server_entry_v1_BatchUpdateEntryResponse(buffer_arg) {
  return spire_api_server_entry_pb.BatchUpdateEntryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_spire_api_server_entry_v1_CountEntriesRequest(arg) {
  if (!(arg instanceof spire_api_server_entry_pb.CountEntriesRequest)) {
    throw new Error('Expected argument of type spire.api.server.entry.v1.CountEntriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_spire_api_server_entry_v1_CountEntriesRequest(buffer_arg) {
  return spire_api_server_entry_pb.CountEntriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_spire_api_server_entry_v1_CountEntriesResponse(arg) {
  if (!(arg instanceof spire_api_server_entry_pb.CountEntriesResponse)) {
    throw new Error('Expected argument of type spire.api.server.entry.v1.CountEntriesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_spire_api_server_entry_v1_CountEntriesResponse(buffer_arg) {
  return spire_api_server_entry_pb.CountEntriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_spire_api_server_entry_v1_GetAuthorizedEntriesRequest(arg) {
  if (!(arg instanceof spire_api_server_entry_pb.GetAuthorizedEntriesRequest)) {
    throw new Error('Expected argument of type spire.api.server.entry.v1.GetAuthorizedEntriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_spire_api_server_entry_v1_GetAuthorizedEntriesRequest(buffer_arg) {
  return spire_api_server_entry_pb.GetAuthorizedEntriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_spire_api_server_entry_v1_GetAuthorizedEntriesResponse(arg) {
  if (!(arg instanceof spire_api_server_entry_pb.GetAuthorizedEntriesResponse)) {
    throw new Error('Expected argument of type spire.api.server.entry.v1.GetAuthorizedEntriesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_spire_api_server_entry_v1_GetAuthorizedEntriesResponse(buffer_arg) {
  return spire_api_server_entry_pb.GetAuthorizedEntriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_spire_api_server_entry_v1_GetEntryRequest(arg) {
  if (!(arg instanceof spire_api_server_entry_pb.GetEntryRequest)) {
    throw new Error('Expected argument of type spire.api.server.entry.v1.GetEntryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_spire_api_server_entry_v1_GetEntryRequest(buffer_arg) {
  return spire_api_server_entry_pb.GetEntryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_spire_api_server_entry_v1_ListEntriesRequest(arg) {
  if (!(arg instanceof spire_api_server_entry_pb.ListEntriesRequest)) {
    throw new Error('Expected argument of type spire.api.server.entry.v1.ListEntriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_spire_api_server_entry_v1_ListEntriesRequest(buffer_arg) {
  return spire_api_server_entry_pb.ListEntriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_spire_api_server_entry_v1_ListEntriesResponse(arg) {
  if (!(arg instanceof spire_api_server_entry_pb.ListEntriesResponse)) {
    throw new Error('Expected argument of type spire.api.server.entry.v1.ListEntriesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_spire_api_server_entry_v1_ListEntriesResponse(buffer_arg) {
  return spire_api_server_entry_pb.ListEntriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_spire_api_types_Entry(arg) {
  if (!(arg instanceof spire_api_types_entry_pb.Entry)) {
    throw new Error('Expected argument of type spire.api.types.Entry');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_spire_api_types_Entry(buffer_arg) {
  return spire_api_types_entry_pb.Entry.deserializeBinary(new Uint8Array(buffer_arg));
}


// Manages registration entries stored by the SPIRE Server.
var EntryService = exports.EntryService = {
  // Count entries.
//
// The caller must be local or present an admin X509-SVID.
countEntries: {
    path: '/spire.api.server.entry.v1.Entry/CountEntries',
    requestStream: false,
    responseStream: false,
    requestType: spire_api_server_entry_pb.CountEntriesRequest,
    responseType: spire_api_server_entry_pb.CountEntriesResponse,
    requestSerialize: serialize_spire_api_server_entry_v1_CountEntriesRequest,
    requestDeserialize: deserialize_spire_api_server_entry_v1_CountEntriesRequest,
    responseSerialize: serialize_spire_api_server_entry_v1_CountEntriesResponse,
    responseDeserialize: deserialize_spire_api_server_entry_v1_CountEntriesResponse,
  },
  // Lists entries.
//
// The caller must be local or present an admin X509-SVID.
listEntries: {
    path: '/spire.api.server.entry.v1.Entry/ListEntries',
    requestStream: false,
    responseStream: false,
    requestType: spire_api_server_entry_pb.ListEntriesRequest,
    responseType: spire_api_server_entry_pb.ListEntriesResponse,
    requestSerialize: serialize_spire_api_server_entry_v1_ListEntriesRequest,
    requestDeserialize: deserialize_spire_api_server_entry_v1_ListEntriesRequest,
    responseSerialize: serialize_spire_api_server_entry_v1_ListEntriesResponse,
    responseDeserialize: deserialize_spire_api_server_entry_v1_ListEntriesResponse,
  },
  // Gets an entry. If the entry does not exist, NOT_FOUND is returned.
//
// The caller must be local or present an admin X509-SVID.
getEntry: {
    path: '/spire.api.server.entry.v1.Entry/GetEntry',
    requestStream: false,
    responseStream: false,
    requestType: spire_api_server_entry_pb.GetEntryRequest,
    responseType: spire_api_types_entry_pb.Entry,
    requestSerialize: serialize_spire_api_server_entry_v1_GetEntryRequest,
    requestDeserialize: deserialize_spire_api_server_entry_v1_GetEntryRequest,
    responseSerialize: serialize_spire_api_types_Entry,
    responseDeserialize: deserialize_spire_api_types_Entry,
  },
  // Batch creates one or more entries.
//
// The caller must be local or present an admin X509-SVID.
batchCreateEntry: {
    path: '/spire.api.server.entry.v1.Entry/BatchCreateEntry',
    requestStream: false,
    responseStream: false,
    requestType: spire_api_server_entry_pb.BatchCreateEntryRequest,
    responseType: spire_api_server_entry_pb.BatchCreateEntryResponse,
    requestSerialize: serialize_spire_api_server_entry_v1_BatchCreateEntryRequest,
    requestDeserialize: deserialize_spire_api_server_entry_v1_BatchCreateEntryRequest,
    responseSerialize: serialize_spire_api_server_entry_v1_BatchCreateEntryResponse,
    responseDeserialize: deserialize_spire_api_server_entry_v1_BatchCreateEntryResponse,
  },
  // Batch updates one or more entries.
//
// The caller must be local or present an admin X509-SVID.
batchUpdateEntry: {
    path: '/spire.api.server.entry.v1.Entry/BatchUpdateEntry',
    requestStream: false,
    responseStream: false,
    requestType: spire_api_server_entry_pb.BatchUpdateEntryRequest,
    responseType: spire_api_server_entry_pb.BatchUpdateEntryResponse,
    requestSerialize: serialize_spire_api_server_entry_v1_BatchUpdateEntryRequest,
    requestDeserialize: deserialize_spire_api_server_entry_v1_BatchUpdateEntryRequest,
    responseSerialize: serialize_spire_api_server_entry_v1_BatchUpdateEntryResponse,
    responseDeserialize: deserialize_spire_api_server_entry_v1_BatchUpdateEntryResponse,
  },
  // Batch deletes one or more entries.
//
// The caller must be local or present an admin X509-SVID.
batchDeleteEntry: {
    path: '/spire.api.server.entry.v1.Entry/BatchDeleteEntry',
    requestStream: false,
    responseStream: false,
    requestType: spire_api_server_entry_pb.BatchDeleteEntryRequest,
    responseType: spire_api_server_entry_pb.BatchDeleteEntryResponse,
    requestSerialize: serialize_spire_api_server_entry_v1_BatchDeleteEntryRequest,
    requestDeserialize: deserialize_spire_api_server_entry_v1_BatchDeleteEntryRequest,
    responseSerialize: serialize_spire_api_server_entry_v1_BatchDeleteEntryResponse,
    responseDeserialize: deserialize_spire_api_server_entry_v1_BatchDeleteEntryResponse,
  },
  // Gets the entries the caller is authorized for.
//
// The caller must present an active agent X509-SVID. See the Agent
// AttestAgent/RenewAgent RPCs.
getAuthorizedEntries: {
    path: '/spire.api.server.entry.v1.Entry/GetAuthorizedEntries',
    requestStream: false,
    responseStream: false,
    requestType: spire_api_server_entry_pb.GetAuthorizedEntriesRequest,
    responseType: spire_api_server_entry_pb.GetAuthorizedEntriesResponse,
    requestSerialize: serialize_spire_api_server_entry_v1_GetAuthorizedEntriesRequest,
    requestDeserialize: deserialize_spire_api_server_entry_v1_GetAuthorizedEntriesRequest,
    responseSerialize: serialize_spire_api_server_entry_v1_GetAuthorizedEntriesResponse,
    responseDeserialize: deserialize_spire_api_server_entry_v1_GetAuthorizedEntriesResponse,
  },
};

exports.EntryClient = grpc.makeGenericClientConstructor(EntryService);
