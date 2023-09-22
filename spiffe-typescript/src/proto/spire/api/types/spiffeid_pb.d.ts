// package: spire.api.types
// file: spire/api/types/spiffeid.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class SPIFFEID extends jspb.Message { 
    getTrustDomain(): string;
    setTrustDomain(value: string): SPIFFEID;
    getPath(): string;
    setPath(value: string): SPIFFEID;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SPIFFEID.AsObject;
    static toObject(includeInstance: boolean, msg: SPIFFEID): SPIFFEID.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SPIFFEID, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SPIFFEID;
    static deserializeBinaryFromReader(message: SPIFFEID, reader: jspb.BinaryReader): SPIFFEID;
}

export namespace SPIFFEID {
    export type AsObject = {
        trustDomain: string,
        path: string,
    }
}
