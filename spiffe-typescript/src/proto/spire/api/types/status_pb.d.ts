// package: spire.api.types
// file: spire/api/types/status.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Status extends jspb.Message { 
    getCode(): number;
    setCode(value: number): Status;
    getMessage(): string;
    setMessage(value: string): Status;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Status.AsObject;
    static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Status;
    static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
}

export namespace Status {
    export type AsObject = {
        code: number,
        message: string,
    }
}

export class PermissionDeniedDetails extends jspb.Message { 
    getReason(): PermissionDeniedDetails.Reason;
    setReason(value: PermissionDeniedDetails.Reason): PermissionDeniedDetails;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PermissionDeniedDetails.AsObject;
    static toObject(includeInstance: boolean, msg: PermissionDeniedDetails): PermissionDeniedDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PermissionDeniedDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PermissionDeniedDetails;
    static deserializeBinaryFromReader(message: PermissionDeniedDetails, reader: jspb.BinaryReader): PermissionDeniedDetails;
}

export namespace PermissionDeniedDetails {
    export type AsObject = {
        reason: PermissionDeniedDetails.Reason,
    }

    export enum Reason {
    UNKNOWN = 0,
    AGENT_EXPIRED = 1,
    AGENT_NOT_ATTESTED = 2,
    AGENT_NOT_ACTIVE = 3,
    AGENT_BANNED = 4,
    AGENT_MUST_REATTEST = 5,
    }

}
