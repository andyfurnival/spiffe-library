// package: 
// file: spire/workload.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class X509SVIDRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): X509SVIDRequest.AsObject;
    static toObject(includeInstance: boolean, msg: X509SVIDRequest): X509SVIDRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: X509SVIDRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): X509SVIDRequest;
    static deserializeBinaryFromReader(message: X509SVIDRequest, reader: jspb.BinaryReader): X509SVIDRequest;
}

export namespace X509SVIDRequest {
    export type AsObject = {
    }
}

export class X509SVIDResponse extends jspb.Message { 
    clearSvidsList(): void;
    getSvidsList(): Array<X509SVID>;
    setSvidsList(value: Array<X509SVID>): X509SVIDResponse;
    addSvids(value?: X509SVID, index?: number): X509SVID;
    clearCrlList(): void;
    getCrlList(): Array<Uint8Array | string>;
    getCrlList_asU8(): Array<Uint8Array>;
    getCrlList_asB64(): Array<string>;
    setCrlList(value: Array<Uint8Array | string>): X509SVIDResponse;
    addCrl(value: Uint8Array | string, index?: number): Uint8Array | string;

    getFederatedBundlesMap(): jspb.Map<string, Uint8Array | string>;
    clearFederatedBundlesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): X509SVIDResponse.AsObject;
    static toObject(includeInstance: boolean, msg: X509SVIDResponse): X509SVIDResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: X509SVIDResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): X509SVIDResponse;
    static deserializeBinaryFromReader(message: X509SVIDResponse, reader: jspb.BinaryReader): X509SVIDResponse;
}

export namespace X509SVIDResponse {
    export type AsObject = {
        svidsList: Array<X509SVID.AsObject>,
        crlList: Array<Uint8Array | string>,

        federatedBundlesMap: Array<[string, Uint8Array | string]>,
    }
}

export class X509SVID extends jspb.Message { 
    getSpiffeId(): string;
    setSpiffeId(value: string): X509SVID;
    getX509Svid(): Uint8Array | string;
    getX509Svid_asU8(): Uint8Array;
    getX509Svid_asB64(): string;
    setX509Svid(value: Uint8Array | string): X509SVID;
    getX509SvidKey(): Uint8Array | string;
    getX509SvidKey_asU8(): Uint8Array;
    getX509SvidKey_asB64(): string;
    setX509SvidKey(value: Uint8Array | string): X509SVID;
    getBundle(): Uint8Array | string;
    getBundle_asU8(): Uint8Array;
    getBundle_asB64(): string;
    setBundle(value: Uint8Array | string): X509SVID;
    getHint(): string;
    setHint(value: string): X509SVID;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): X509SVID.AsObject;
    static toObject(includeInstance: boolean, msg: X509SVID): X509SVID.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: X509SVID, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): X509SVID;
    static deserializeBinaryFromReader(message: X509SVID, reader: jspb.BinaryReader): X509SVID;
}

export namespace X509SVID {
    export type AsObject = {
        spiffeId: string,
        x509Svid: Uint8Array | string,
        x509SvidKey: Uint8Array | string,
        bundle: Uint8Array | string,
        hint: string,
    }
}

export class X509BundlesRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): X509BundlesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: X509BundlesRequest): X509BundlesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: X509BundlesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): X509BundlesRequest;
    static deserializeBinaryFromReader(message: X509BundlesRequest, reader: jspb.BinaryReader): X509BundlesRequest;
}

export namespace X509BundlesRequest {
    export type AsObject = {
    }
}

export class X509BundlesResponse extends jspb.Message { 
    clearCrlList(): void;
    getCrlList(): Array<Uint8Array | string>;
    getCrlList_asU8(): Array<Uint8Array>;
    getCrlList_asB64(): Array<string>;
    setCrlList(value: Array<Uint8Array | string>): X509BundlesResponse;
    addCrl(value: Uint8Array | string, index?: number): Uint8Array | string;

    getBundlesMap(): jspb.Map<string, Uint8Array | string>;
    clearBundlesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): X509BundlesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: X509BundlesResponse): X509BundlesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: X509BundlesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): X509BundlesResponse;
    static deserializeBinaryFromReader(message: X509BundlesResponse, reader: jspb.BinaryReader): X509BundlesResponse;
}

export namespace X509BundlesResponse {
    export type AsObject = {
        crlList: Array<Uint8Array | string>,

        bundlesMap: Array<[string, Uint8Array | string]>,
    }
}

export class JWTSVIDRequest extends jspb.Message { 
    clearAudienceList(): void;
    getAudienceList(): Array<string>;
    setAudienceList(value: Array<string>): JWTSVIDRequest;
    addAudience(value: string, index?: number): string;
    getSpiffeId(): string;
    setSpiffeId(value: string): JWTSVIDRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JWTSVIDRequest.AsObject;
    static toObject(includeInstance: boolean, msg: JWTSVIDRequest): JWTSVIDRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JWTSVIDRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JWTSVIDRequest;
    static deserializeBinaryFromReader(message: JWTSVIDRequest, reader: jspb.BinaryReader): JWTSVIDRequest;
}

export namespace JWTSVIDRequest {
    export type AsObject = {
        audienceList: Array<string>,
        spiffeId: string,
    }
}

export class JWTSVIDResponse extends jspb.Message { 
    clearSvidsList(): void;
    getSvidsList(): Array<JWTSVID>;
    setSvidsList(value: Array<JWTSVID>): JWTSVIDResponse;
    addSvids(value?: JWTSVID, index?: number): JWTSVID;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JWTSVIDResponse.AsObject;
    static toObject(includeInstance: boolean, msg: JWTSVIDResponse): JWTSVIDResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JWTSVIDResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JWTSVIDResponse;
    static deserializeBinaryFromReader(message: JWTSVIDResponse, reader: jspb.BinaryReader): JWTSVIDResponse;
}

export namespace JWTSVIDResponse {
    export type AsObject = {
        svidsList: Array<JWTSVID.AsObject>,
    }
}

export class JWTSVID extends jspb.Message { 
    getSpiffeId(): string;
    setSpiffeId(value: string): JWTSVID;
    getSvid(): string;
    setSvid(value: string): JWTSVID;
    getHint(): string;
    setHint(value: string): JWTSVID;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JWTSVID.AsObject;
    static toObject(includeInstance: boolean, msg: JWTSVID): JWTSVID.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JWTSVID, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JWTSVID;
    static deserializeBinaryFromReader(message: JWTSVID, reader: jspb.BinaryReader): JWTSVID;
}

export namespace JWTSVID {
    export type AsObject = {
        spiffeId: string,
        svid: string,
        hint: string,
    }
}

export class JWTBundlesRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JWTBundlesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: JWTBundlesRequest): JWTBundlesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JWTBundlesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JWTBundlesRequest;
    static deserializeBinaryFromReader(message: JWTBundlesRequest, reader: jspb.BinaryReader): JWTBundlesRequest;
}

export namespace JWTBundlesRequest {
    export type AsObject = {
    }
}

export class JWTBundlesResponse extends jspb.Message { 

    getBundlesMap(): jspb.Map<string, Uint8Array | string>;
    clearBundlesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JWTBundlesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: JWTBundlesResponse): JWTBundlesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JWTBundlesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JWTBundlesResponse;
    static deserializeBinaryFromReader(message: JWTBundlesResponse, reader: jspb.BinaryReader): JWTBundlesResponse;
}

export namespace JWTBundlesResponse {
    export type AsObject = {

        bundlesMap: Array<[string, Uint8Array | string]>,
    }
}

export class ValidateJWTSVIDRequest extends jspb.Message { 
    getAudience(): string;
    setAudience(value: string): ValidateJWTSVIDRequest;
    getSvid(): string;
    setSvid(value: string): ValidateJWTSVIDRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateJWTSVIDRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateJWTSVIDRequest): ValidateJWTSVIDRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidateJWTSVIDRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateJWTSVIDRequest;
    static deserializeBinaryFromReader(message: ValidateJWTSVIDRequest, reader: jspb.BinaryReader): ValidateJWTSVIDRequest;
}

export namespace ValidateJWTSVIDRequest {
    export type AsObject = {
        audience: string,
        svid: string,
    }
}

export class ValidateJWTSVIDResponse extends jspb.Message { 
    getSpiffeId(): string;
    setSpiffeId(value: string): ValidateJWTSVIDResponse;

    hasClaims(): boolean;
    clearClaims(): void;
    getClaims(): google_protobuf_struct_pb.Struct | undefined;
    setClaims(value?: google_protobuf_struct_pb.Struct): ValidateJWTSVIDResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateJWTSVIDResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateJWTSVIDResponse): ValidateJWTSVIDResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidateJWTSVIDResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateJWTSVIDResponse;
    static deserializeBinaryFromReader(message: ValidateJWTSVIDResponse, reader: jspb.BinaryReader): ValidateJWTSVIDResponse;
}

export namespace ValidateJWTSVIDResponse {
    export type AsObject = {
        spiffeId: string,
        claims?: google_protobuf_struct_pb.Struct.AsObject,
    }
}
