// source: spire/api/types/federateswith.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.spire.api.types.FederatesWithMatch', null, global);
goog.exportSymbol('proto.spire.api.types.FederatesWithMatch.MatchBehavior', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spire.api.types.FederatesWithMatch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.spire.api.types.FederatesWithMatch.repeatedFields_, null);
};
goog.inherits(proto.spire.api.types.FederatesWithMatch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.spire.api.types.FederatesWithMatch.displayName = 'proto.spire.api.types.FederatesWithMatch';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.spire.api.types.FederatesWithMatch.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spire.api.types.FederatesWithMatch.prototype.toObject = function(opt_includeInstance) {
  return proto.spire.api.types.FederatesWithMatch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spire.api.types.FederatesWithMatch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.spire.api.types.FederatesWithMatch.toObject = function(includeInstance, msg) {
  var f, obj = {
    trustDomainsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    match: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spire.api.types.FederatesWithMatch}
 */
proto.spire.api.types.FederatesWithMatch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spire.api.types.FederatesWithMatch;
  return proto.spire.api.types.FederatesWithMatch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spire.api.types.FederatesWithMatch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spire.api.types.FederatesWithMatch}
 */
proto.spire.api.types.FederatesWithMatch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addTrustDomains(value);
      break;
    case 2:
      var value = /** @type {!proto.spire.api.types.FederatesWithMatch.MatchBehavior} */ (reader.readEnum());
      msg.setMatch(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spire.api.types.FederatesWithMatch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.spire.api.types.FederatesWithMatch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.spire.api.types.FederatesWithMatch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.spire.api.types.FederatesWithMatch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrustDomainsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getMatch();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.spire.api.types.FederatesWithMatch.MatchBehavior = {
  MATCH_EXACT: 0,
  MATCH_SUBSET: 1,
  MATCH_SUPERSET: 2,
  MATCH_ANY: 3
};

/**
 * repeated string trust_domains = 1;
 * @return {!Array<string>}
 */
proto.spire.api.types.FederatesWithMatch.prototype.getTrustDomainsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.spire.api.types.FederatesWithMatch} returns this
 */
proto.spire.api.types.FederatesWithMatch.prototype.setTrustDomainsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.spire.api.types.FederatesWithMatch} returns this
 */
proto.spire.api.types.FederatesWithMatch.prototype.addTrustDomains = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.spire.api.types.FederatesWithMatch} returns this
 */
proto.spire.api.types.FederatesWithMatch.prototype.clearTrustDomainsList = function() {
  return this.setTrustDomainsList([]);
};


/**
 * optional MatchBehavior match = 2;
 * @return {!proto.spire.api.types.FederatesWithMatch.MatchBehavior}
 */
proto.spire.api.types.FederatesWithMatch.prototype.getMatch = function() {
  return /** @type {!proto.spire.api.types.FederatesWithMatch.MatchBehavior} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.spire.api.types.FederatesWithMatch.MatchBehavior} value
 * @return {!proto.spire.api.types.FederatesWithMatch} returns this
 */
proto.spire.api.types.FederatesWithMatch.prototype.setMatch = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


goog.object.extend(exports, proto.spire.api.types);
