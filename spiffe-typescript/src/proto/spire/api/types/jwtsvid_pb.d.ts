// package: spire.api.types
// file: spire/api/types/jwtsvid.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as spire_api_types_spiffeid_pb from "../../../spire/api/types/spiffeid_pb";

export class JWTSVID extends jspb.Message { 
    getToken(): string;
    setToken(value: string): JWTSVID;

    hasId(): boolean;
    clearId(): void;
    getId(): spire_api_types_spiffeid_pb.SPIFFEID | undefined;
    setId(value?: spire_api_types_spiffeid_pb.SPIFFEID): JWTSVID;
    getExpiresAt(): number;
    setExpiresAt(value: number): JWTSVID;
    getIssuedAt(): number;
    setIssuedAt(value: number): JWTSVID;
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
        token: string,
        id?: spire_api_types_spiffeid_pb.SPIFFEID.AsObject,
        expiresAt: number,
        issuedAt: number,
        hint: string,
    }
}
