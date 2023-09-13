import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Struct } from "@bufbuild/protobuf";
export declare class X509SVIDRequest extends Message<X509SVIDRequest> {
    constructor(data?: PartialMessage<X509SVIDRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "X509SVIDRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): X509SVIDRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): X509SVIDRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): X509SVIDRequest;
    static equals(a: X509SVIDRequest | PlainMessage<X509SVIDRequest> | undefined, b: X509SVIDRequest | PlainMessage<X509SVIDRequest> | undefined): boolean;
}
export declare class X509SVIDResponse extends Message<X509SVIDResponse> {
    svids: X509SVID[];
    crl: Uint8Array[];
    federatedBundles: {
        [key: string]: Uint8Array;
    };
    constructor(data?: PartialMessage<X509SVIDResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "X509SVIDResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): X509SVIDResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): X509SVIDResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): X509SVIDResponse;
    static equals(a: X509SVIDResponse | PlainMessage<X509SVIDResponse> | undefined, b: X509SVIDResponse | PlainMessage<X509SVIDResponse> | undefined): boolean;
}
export declare class X509SVID extends Message<X509SVID> {
    spiffeId: string;
    x509Svid: Uint8Array;
    x509SvidKey: Uint8Array;
    bundle: Uint8Array;
    hint: string;
    constructor(data?: PartialMessage<X509SVID>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "X509SVID";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): X509SVID;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): X509SVID;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): X509SVID;
    static equals(a: X509SVID | PlainMessage<X509SVID> | undefined, b: X509SVID | PlainMessage<X509SVID> | undefined): boolean;
}
export declare class X509BundlesRequest extends Message<X509BundlesRequest> {
    constructor(data?: PartialMessage<X509BundlesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "X509BundlesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): X509BundlesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): X509BundlesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): X509BundlesRequest;
    static equals(a: X509BundlesRequest | PlainMessage<X509BundlesRequest> | undefined, b: X509BundlesRequest | PlainMessage<X509BundlesRequest> | undefined): boolean;
}
export declare class X509BundlesResponse extends Message<X509BundlesResponse> {
    crl: Uint8Array[];
    bundles: {
        [key: string]: Uint8Array;
    };
    constructor(data?: PartialMessage<X509BundlesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "X509BundlesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): X509BundlesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): X509BundlesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): X509BundlesResponse;
    static equals(a: X509BundlesResponse | PlainMessage<X509BundlesResponse> | undefined, b: X509BundlesResponse | PlainMessage<X509BundlesResponse> | undefined): boolean;
}
export declare class JWTSVIDRequest extends Message<JWTSVIDRequest> {
    audience: string[];
    spiffeId: string;
    constructor(data?: PartialMessage<JWTSVIDRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "JWTSVIDRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): JWTSVIDRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): JWTSVIDRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): JWTSVIDRequest;
    static equals(a: JWTSVIDRequest | PlainMessage<JWTSVIDRequest> | undefined, b: JWTSVIDRequest | PlainMessage<JWTSVIDRequest> | undefined): boolean;
}
export declare class JWTSVIDResponse extends Message<JWTSVIDResponse> {
    svids: JWTSVID[];
    constructor(data?: PartialMessage<JWTSVIDResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "JWTSVIDResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): JWTSVIDResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): JWTSVIDResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): JWTSVIDResponse;
    static equals(a: JWTSVIDResponse | PlainMessage<JWTSVIDResponse> | undefined, b: JWTSVIDResponse | PlainMessage<JWTSVIDResponse> | undefined): boolean;
}
export declare class JWTSVID extends Message<JWTSVID> {
    spiffeId: string;
    svid: string;
    hint: string;
    constructor(data?: PartialMessage<JWTSVID>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "JWTSVID";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): JWTSVID;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): JWTSVID;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): JWTSVID;
    static equals(a: JWTSVID | PlainMessage<JWTSVID> | undefined, b: JWTSVID | PlainMessage<JWTSVID> | undefined): boolean;
}
export declare class JWTBundlesRequest extends Message<JWTBundlesRequest> {
    constructor(data?: PartialMessage<JWTBundlesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "JWTBundlesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): JWTBundlesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): JWTBundlesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): JWTBundlesRequest;
    static equals(a: JWTBundlesRequest | PlainMessage<JWTBundlesRequest> | undefined, b: JWTBundlesRequest | PlainMessage<JWTBundlesRequest> | undefined): boolean;
}
export declare class JWTBundlesResponse extends Message<JWTBundlesResponse> {
    bundles: {
        [key: string]: Uint8Array;
    };
    constructor(data?: PartialMessage<JWTBundlesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "JWTBundlesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): JWTBundlesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): JWTBundlesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): JWTBundlesResponse;
    static equals(a: JWTBundlesResponse | PlainMessage<JWTBundlesResponse> | undefined, b: JWTBundlesResponse | PlainMessage<JWTBundlesResponse> | undefined): boolean;
}
export declare class ValidateJWTSVIDRequest extends Message<ValidateJWTSVIDRequest> {
    audience: string;
    svid: string;
    constructor(data?: PartialMessage<ValidateJWTSVIDRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ValidateJWTSVIDRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ValidateJWTSVIDRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ValidateJWTSVIDRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ValidateJWTSVIDRequest;
    static equals(a: ValidateJWTSVIDRequest | PlainMessage<ValidateJWTSVIDRequest> | undefined, b: ValidateJWTSVIDRequest | PlainMessage<ValidateJWTSVIDRequest> | undefined): boolean;
}
export declare class ValidateJWTSVIDResponse extends Message<ValidateJWTSVIDResponse> {
    spiffeId: string;
    claims?: Struct;
    constructor(data?: PartialMessage<ValidateJWTSVIDResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ValidateJWTSVIDResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ValidateJWTSVIDResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ValidateJWTSVIDResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ValidateJWTSVIDResponse;
    static equals(a: ValidateJWTSVIDResponse | PlainMessage<ValidateJWTSVIDResponse> | undefined, b: ValidateJWTSVIDResponse | PlainMessage<ValidateJWTSVIDResponse> | undefined): boolean;
}
