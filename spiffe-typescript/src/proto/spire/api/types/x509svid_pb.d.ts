// package: spire.api.types
// file: spire/api/types/x509svid.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as spire_api_types_spiffeid_pb from "../../../spire/api/types/spiffeid_pb";

export class X509SVID extends jspb.Message { 
    clearCertChainList(): void;
    getCertChainList(): Array<Uint8Array | string>;
    getCertChainList_asU8(): Array<Uint8Array>;
    getCertChainList_asB64(): Array<string>;
    setCertChainList(value: Array<Uint8Array | string>): X509SVID;
    addCertChain(value: Uint8Array | string, index?: number): Uint8Array | string;

    hasId(): boolean;
    clearId(): void;
    getId(): spire_api_types_spiffeid_pb.SPIFFEID | undefined;
    setId(value?: spire_api_types_spiffeid_pb.SPIFFEID): X509SVID;
    getExpiresAt(): number;
    setExpiresAt(value: number): X509SVID;
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
        certChainList: Array<Uint8Array | string>,
        id?: spire_api_types_spiffeid_pb.SPIFFEID.AsObject,
        expiresAt: number,
        hint: string,
    }
}
