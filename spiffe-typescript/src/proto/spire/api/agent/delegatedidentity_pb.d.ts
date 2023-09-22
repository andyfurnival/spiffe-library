// package: spire.api.agent.delegatedidentity.v1
// file: spire/api/agent/delegatedidentity.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as spire_api_types_selector_pb from "../../../spire/api/types/selector_pb";
import * as spire_api_types_x509svid_pb from "../../../spire/api/types/x509svid_pb";
import * as spire_api_types_jwtsvid_pb from "../../../spire/api/types/jwtsvid_pb";

export class X509SVIDWithKey extends jspb.Message { 

    hasX509Svid(): boolean;
    clearX509Svid(): void;
    getX509Svid(): spire_api_types_x509svid_pb.X509SVID | undefined;
    setX509Svid(value?: spire_api_types_x509svid_pb.X509SVID): X509SVIDWithKey;
    getX509SvidKey(): Uint8Array | string;
    getX509SvidKey_asU8(): Uint8Array;
    getX509SvidKey_asB64(): string;
    setX509SvidKey(value: Uint8Array | string): X509SVIDWithKey;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): X509SVIDWithKey.AsObject;
    static toObject(includeInstance: boolean, msg: X509SVIDWithKey): X509SVIDWithKey.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: X509SVIDWithKey, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): X509SVIDWithKey;
    static deserializeBinaryFromReader(message: X509SVIDWithKey, reader: jspb.BinaryReader): X509SVIDWithKey;
}

export namespace X509SVIDWithKey {
    export type AsObject = {
        x509Svid?: spire_api_types_x509svid_pb.X509SVID.AsObject,
        x509SvidKey: Uint8Array | string,
    }
}

export class SubscribeToX509SVIDsRequest extends jspb.Message { 
    clearSelectorsList(): void;
    getSelectorsList(): Array<spire_api_types_selector_pb.Selector>;
    setSelectorsList(value: Array<spire_api_types_selector_pb.Selector>): SubscribeToX509SVIDsRequest;
    addSelectors(value?: spire_api_types_selector_pb.Selector, index?: number): spire_api_types_selector_pb.Selector;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscribeToX509SVIDsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SubscribeToX509SVIDsRequest): SubscribeToX509SVIDsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscribeToX509SVIDsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscribeToX509SVIDsRequest;
    static deserializeBinaryFromReader(message: SubscribeToX509SVIDsRequest, reader: jspb.BinaryReader): SubscribeToX509SVIDsRequest;
}

export namespace SubscribeToX509SVIDsRequest {
    export type AsObject = {
        selectorsList: Array<spire_api_types_selector_pb.Selector.AsObject>,
    }
}

export class SubscribeToX509SVIDsResponse extends jspb.Message { 
    clearX509SvidsList(): void;
    getX509SvidsList(): Array<X509SVIDWithKey>;
    setX509SvidsList(value: Array<X509SVIDWithKey>): SubscribeToX509SVIDsResponse;
    addX509Svids(value?: X509SVIDWithKey, index?: number): X509SVIDWithKey;
    clearFederatesWithList(): void;
    getFederatesWithList(): Array<string>;
    setFederatesWithList(value: Array<string>): SubscribeToX509SVIDsResponse;
    addFederatesWith(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscribeToX509SVIDsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SubscribeToX509SVIDsResponse): SubscribeToX509SVIDsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscribeToX509SVIDsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscribeToX509SVIDsResponse;
    static deserializeBinaryFromReader(message: SubscribeToX509SVIDsResponse, reader: jspb.BinaryReader): SubscribeToX509SVIDsResponse;
}

export namespace SubscribeToX509SVIDsResponse {
    export type AsObject = {
        x509SvidsList: Array<X509SVIDWithKey.AsObject>,
        federatesWithList: Array<string>,
    }
}

export class SubscribeToX509BundlesRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscribeToX509BundlesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SubscribeToX509BundlesRequest): SubscribeToX509BundlesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscribeToX509BundlesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscribeToX509BundlesRequest;
    static deserializeBinaryFromReader(message: SubscribeToX509BundlesRequest, reader: jspb.BinaryReader): SubscribeToX509BundlesRequest;
}

export namespace SubscribeToX509BundlesRequest {
    export type AsObject = {
    }
}

export class SubscribeToX509BundlesResponse extends jspb.Message { 

    getCaCertificatesMap(): jspb.Map<string, Uint8Array | string>;
    clearCaCertificatesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscribeToX509BundlesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SubscribeToX509BundlesResponse): SubscribeToX509BundlesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscribeToX509BundlesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscribeToX509BundlesResponse;
    static deserializeBinaryFromReader(message: SubscribeToX509BundlesResponse, reader: jspb.BinaryReader): SubscribeToX509BundlesResponse;
}

export namespace SubscribeToX509BundlesResponse {
    export type AsObject = {

        caCertificatesMap: Array<[string, Uint8Array | string]>,
    }
}

export class FetchJWTSVIDsRequest extends jspb.Message { 
    clearAudienceList(): void;
    getAudienceList(): Array<string>;
    setAudienceList(value: Array<string>): FetchJWTSVIDsRequest;
    addAudience(value: string, index?: number): string;
    clearSelectorsList(): void;
    getSelectorsList(): Array<spire_api_types_selector_pb.Selector>;
    setSelectorsList(value: Array<spire_api_types_selector_pb.Selector>): FetchJWTSVIDsRequest;
    addSelectors(value?: spire_api_types_selector_pb.Selector, index?: number): spire_api_types_selector_pb.Selector;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FetchJWTSVIDsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FetchJWTSVIDsRequest): FetchJWTSVIDsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FetchJWTSVIDsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FetchJWTSVIDsRequest;
    static deserializeBinaryFromReader(message: FetchJWTSVIDsRequest, reader: jspb.BinaryReader): FetchJWTSVIDsRequest;
}

export namespace FetchJWTSVIDsRequest {
    export type AsObject = {
        audienceList: Array<string>,
        selectorsList: Array<spire_api_types_selector_pb.Selector.AsObject>,
    }
}

export class FetchJWTSVIDsResponse extends jspb.Message { 
    clearSvidsList(): void;
    getSvidsList(): Array<spire_api_types_jwtsvid_pb.JWTSVID>;
    setSvidsList(value: Array<spire_api_types_jwtsvid_pb.JWTSVID>): FetchJWTSVIDsResponse;
    addSvids(value?: spire_api_types_jwtsvid_pb.JWTSVID, index?: number): spire_api_types_jwtsvid_pb.JWTSVID;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FetchJWTSVIDsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FetchJWTSVIDsResponse): FetchJWTSVIDsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FetchJWTSVIDsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FetchJWTSVIDsResponse;
    static deserializeBinaryFromReader(message: FetchJWTSVIDsResponse, reader: jspb.BinaryReader): FetchJWTSVIDsResponse;
}

export namespace FetchJWTSVIDsResponse {
    export type AsObject = {
        svidsList: Array<spire_api_types_jwtsvid_pb.JWTSVID.AsObject>,
    }
}

export class SubscribeToJWTBundlesRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscribeToJWTBundlesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SubscribeToJWTBundlesRequest): SubscribeToJWTBundlesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscribeToJWTBundlesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscribeToJWTBundlesRequest;
    static deserializeBinaryFromReader(message: SubscribeToJWTBundlesRequest, reader: jspb.BinaryReader): SubscribeToJWTBundlesRequest;
}

export namespace SubscribeToJWTBundlesRequest {
    export type AsObject = {
    }
}

export class SubscribeToJWTBundlesResponse extends jspb.Message { 

    getBundlesMap(): jspb.Map<string, Uint8Array | string>;
    clearBundlesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscribeToJWTBundlesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SubscribeToJWTBundlesResponse): SubscribeToJWTBundlesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscribeToJWTBundlesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscribeToJWTBundlesResponse;
    static deserializeBinaryFromReader(message: SubscribeToJWTBundlesResponse, reader: jspb.BinaryReader): SubscribeToJWTBundlesResponse;
}

export namespace SubscribeToJWTBundlesResponse {
    export type AsObject = {

        bundlesMap: Array<[string, Uint8Array | string]>,
    }
}
