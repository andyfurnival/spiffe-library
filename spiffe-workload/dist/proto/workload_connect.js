"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpiffeWorkloadAPI = void 0;
const workload_pb_js_1 = require("./workload_pb.js");
const protobuf_1 = require("@bufbuild/protobuf");
exports.SpiffeWorkloadAPI = {
    typeName: "SpiffeWorkloadAPI",
    methods: {
        fetchX509SVID: {
            name: "FetchX509SVID",
            I: workload_pb_js_1.X509SVIDRequest,
            O: workload_pb_js_1.X509SVIDResponse,
            kind: protobuf_1.MethodKind.ServerStreaming,
        },
        fetchX509Bundles: {
            name: "FetchX509Bundles",
            I: workload_pb_js_1.X509BundlesRequest,
            O: workload_pb_js_1.X509BundlesResponse,
            kind: protobuf_1.MethodKind.ServerStreaming,
        },
        fetchJWTSVID: {
            name: "FetchJWTSVID",
            I: workload_pb_js_1.JWTSVIDRequest,
            O: workload_pb_js_1.JWTSVIDResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        fetchJWTBundles: {
            name: "FetchJWTBundles",
            I: workload_pb_js_1.JWTBundlesRequest,
            O: workload_pb_js_1.JWTBundlesResponse,
            kind: protobuf_1.MethodKind.ServerStreaming,
        },
        validateJWTSVID: {
            name: "ValidateJWTSVID",
            I: workload_pb_js_1.ValidateJWTSVIDRequest,
            O: workload_pb_js_1.ValidateJWTSVIDResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
    }
};
//# sourceMappingURL=workload_connect.js.map