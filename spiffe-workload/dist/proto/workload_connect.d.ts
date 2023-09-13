import { JWTBundlesRequest, JWTBundlesResponse, JWTSVIDRequest, JWTSVIDResponse, ValidateJWTSVIDRequest, ValidateJWTSVIDResponse, X509BundlesRequest, X509BundlesResponse, X509SVIDRequest, X509SVIDResponse } from "./workload_pb.js";
export declare const SpiffeWorkloadAPI: {
    readonly typeName: "SpiffeWorkloadAPI";
    readonly methods: {
        readonly fetchX509SVID: {
            readonly name: "FetchX509SVID";
            readonly I: typeof X509SVIDRequest;
            readonly O: typeof X509SVIDResponse;
            readonly kind: any;
        };
        readonly fetchX509Bundles: {
            readonly name: "FetchX509Bundles";
            readonly I: typeof X509BundlesRequest;
            readonly O: typeof X509BundlesResponse;
            readonly kind: any;
        };
        readonly fetchJWTSVID: {
            readonly name: "FetchJWTSVID";
            readonly I: typeof JWTSVIDRequest;
            readonly O: typeof JWTSVIDResponse;
            readonly kind: any;
        };
        readonly fetchJWTBundles: {
            readonly name: "FetchJWTBundles";
            readonly I: typeof JWTBundlesRequest;
            readonly O: typeof JWTBundlesResponse;
            readonly kind: any;
        };
        readonly validateJWTSVID: {
            readonly name: "ValidateJWTSVID";
            readonly I: typeof ValidateJWTSVIDRequest;
            readonly O: typeof ValidateJWTSVIDResponse;
            readonly kind: any;
        };
    };
};
