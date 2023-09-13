"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateJWTSVIDResponse = exports.ValidateJWTSVIDRequest = exports.JWTBundlesResponse = exports.JWTBundlesRequest = exports.JWTSVID = exports.JWTSVIDResponse = exports.JWTSVIDRequest = exports.X509BundlesResponse = exports.X509BundlesRequest = exports.X509SVID = exports.X509SVIDResponse = exports.X509SVIDRequest = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
class X509SVIDRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new X509SVIDRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new X509SVIDRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new X509SVIDRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(X509SVIDRequest, a, b);
    }
}
exports.X509SVIDRequest = X509SVIDRequest;
X509SVIDRequest.runtime = protobuf_1.proto3;
X509SVIDRequest.typeName = "X509SVIDRequest";
X509SVIDRequest.fields = protobuf_1.proto3.util.newFieldList(() => []);
class X509SVIDResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        this.svids = [];
        this.crl = [];
        this.federatedBundles = {};
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new X509SVIDResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new X509SVIDResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new X509SVIDResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(X509SVIDResponse, a, b);
    }
}
exports.X509SVIDResponse = X509SVIDResponse;
X509SVIDResponse.runtime = protobuf_1.proto3;
X509SVIDResponse.typeName = "X509SVIDResponse";
X509SVIDResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "svids", kind: "message", T: X509SVID, repeated: true },
    { no: 2, name: "crl", kind: "scalar", T: 12, repeated: true },
    { no: 3, name: "federated_bundles", kind: "map", K: 9, V: { kind: "scalar", T: 12 } },
]);
class X509SVID extends protobuf_1.Message {
    constructor(data) {
        super();
        this.spiffeId = "";
        this.x509Svid = new Uint8Array(0);
        this.x509SvidKey = new Uint8Array(0);
        this.bundle = new Uint8Array(0);
        this.hint = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new X509SVID().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new X509SVID().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new X509SVID().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(X509SVID, a, b);
    }
}
exports.X509SVID = X509SVID;
X509SVID.runtime = protobuf_1.proto3;
X509SVID.typeName = "X509SVID";
X509SVID.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "spiffe_id", kind: "scalar", T: 9 },
    { no: 2, name: "x509_svid", kind: "scalar", T: 12 },
    { no: 3, name: "x509_svid_key", kind: "scalar", T: 12 },
    { no: 4, name: "bundle", kind: "scalar", T: 12 },
    { no: 5, name: "hint", kind: "scalar", T: 9 },
]);
class X509BundlesRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new X509BundlesRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new X509BundlesRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new X509BundlesRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(X509BundlesRequest, a, b);
    }
}
exports.X509BundlesRequest = X509BundlesRequest;
X509BundlesRequest.runtime = protobuf_1.proto3;
X509BundlesRequest.typeName = "X509BundlesRequest";
X509BundlesRequest.fields = protobuf_1.proto3.util.newFieldList(() => []);
class X509BundlesResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        this.crl = [];
        this.bundles = {};
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new X509BundlesResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new X509BundlesResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new X509BundlesResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(X509BundlesResponse, a, b);
    }
}
exports.X509BundlesResponse = X509BundlesResponse;
X509BundlesResponse.runtime = protobuf_1.proto3;
X509BundlesResponse.typeName = "X509BundlesResponse";
X509BundlesResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "crl", kind: "scalar", T: 12, repeated: true },
    { no: 2, name: "bundles", kind: "map", K: 9, V: { kind: "scalar", T: 12 } },
]);
class JWTSVIDRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        this.audience = [];
        this.spiffeId = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new JWTSVIDRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new JWTSVIDRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new JWTSVIDRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(JWTSVIDRequest, a, b);
    }
}
exports.JWTSVIDRequest = JWTSVIDRequest;
JWTSVIDRequest.runtime = protobuf_1.proto3;
JWTSVIDRequest.typeName = "JWTSVIDRequest";
JWTSVIDRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "audience", kind: "scalar", T: 9, repeated: true },
    { no: 2, name: "spiffe_id", kind: "scalar", T: 9 },
]);
class JWTSVIDResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        this.svids = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new JWTSVIDResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new JWTSVIDResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new JWTSVIDResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(JWTSVIDResponse, a, b);
    }
}
exports.JWTSVIDResponse = JWTSVIDResponse;
JWTSVIDResponse.runtime = protobuf_1.proto3;
JWTSVIDResponse.typeName = "JWTSVIDResponse";
JWTSVIDResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "svids", kind: "message", T: JWTSVID, repeated: true },
]);
class JWTSVID extends protobuf_1.Message {
    constructor(data) {
        super();
        this.spiffeId = "";
        this.svid = "";
        this.hint = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new JWTSVID().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new JWTSVID().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new JWTSVID().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(JWTSVID, a, b);
    }
}
exports.JWTSVID = JWTSVID;
JWTSVID.runtime = protobuf_1.proto3;
JWTSVID.typeName = "JWTSVID";
JWTSVID.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "spiffe_id", kind: "scalar", T: 9 },
    { no: 2, name: "svid", kind: "scalar", T: 9 },
    { no: 3, name: "hint", kind: "scalar", T: 9 },
]);
class JWTBundlesRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new JWTBundlesRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new JWTBundlesRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new JWTBundlesRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(JWTBundlesRequest, a, b);
    }
}
exports.JWTBundlesRequest = JWTBundlesRequest;
JWTBundlesRequest.runtime = protobuf_1.proto3;
JWTBundlesRequest.typeName = "JWTBundlesRequest";
JWTBundlesRequest.fields = protobuf_1.proto3.util.newFieldList(() => []);
class JWTBundlesResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        this.bundles = {};
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new JWTBundlesResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new JWTBundlesResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new JWTBundlesResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(JWTBundlesResponse, a, b);
    }
}
exports.JWTBundlesResponse = JWTBundlesResponse;
JWTBundlesResponse.runtime = protobuf_1.proto3;
JWTBundlesResponse.typeName = "JWTBundlesResponse";
JWTBundlesResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "bundles", kind: "map", K: 9, V: { kind: "scalar", T: 12 } },
]);
class ValidateJWTSVIDRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        this.audience = "";
        this.svid = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ValidateJWTSVIDRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ValidateJWTSVIDRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ValidateJWTSVIDRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ValidateJWTSVIDRequest, a, b);
    }
}
exports.ValidateJWTSVIDRequest = ValidateJWTSVIDRequest;
ValidateJWTSVIDRequest.runtime = protobuf_1.proto3;
ValidateJWTSVIDRequest.typeName = "ValidateJWTSVIDRequest";
ValidateJWTSVIDRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "audience", kind: "scalar", T: 9 },
    { no: 2, name: "svid", kind: "scalar", T: 9 },
]);
class ValidateJWTSVIDResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        this.spiffeId = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ValidateJWTSVIDResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ValidateJWTSVIDResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ValidateJWTSVIDResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ValidateJWTSVIDResponse, a, b);
    }
}
exports.ValidateJWTSVIDResponse = ValidateJWTSVIDResponse;
ValidateJWTSVIDResponse.runtime = protobuf_1.proto3;
ValidateJWTSVIDResponse.typeName = "ValidateJWTSVIDResponse";
ValidateJWTSVIDResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "spiffe_id", kind: "scalar", T: 9 },
    { no: 2, name: "claims", kind: "message", T: protobuf_1.Struct },
]);
//# sourceMappingURL=workload_pb.js.map