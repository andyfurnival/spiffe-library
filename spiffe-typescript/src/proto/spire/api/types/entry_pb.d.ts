// package: spire.api.types
// file: spire/api/types/entry.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as spire_api_types_selector_pb from "../../../spire/api/types/selector_pb";
import * as spire_api_types_spiffeid_pb from "../../../spire/api/types/spiffeid_pb";

export class Entry extends jspb.Message { 
    getId(): string;
    setId(value: string): Entry;

    hasSpiffeId(): boolean;
    clearSpiffeId(): void;
    getSpiffeId(): spire_api_types_spiffeid_pb.SPIFFEID | undefined;
    setSpiffeId(value?: spire_api_types_spiffeid_pb.SPIFFEID): Entry;

    hasParentId(): boolean;
    clearParentId(): void;
    getParentId(): spire_api_types_spiffeid_pb.SPIFFEID | undefined;
    setParentId(value?: spire_api_types_spiffeid_pb.SPIFFEID): Entry;
    clearSelectorsList(): void;
    getSelectorsList(): Array<spire_api_types_selector_pb.Selector>;
    setSelectorsList(value: Array<spire_api_types_selector_pb.Selector>): Entry;
    addSelectors(value?: spire_api_types_selector_pb.Selector, index?: number): spire_api_types_selector_pb.Selector;
    getX509SvidTtl(): number;
    setX509SvidTtl(value: number): Entry;
    clearFederatesWithList(): void;
    getFederatesWithList(): Array<string>;
    setFederatesWithList(value: Array<string>): Entry;
    addFederatesWith(value: string, index?: number): string;
    getAdmin(): boolean;
    setAdmin(value: boolean): Entry;
    getDownstream(): boolean;
    setDownstream(value: boolean): Entry;
    getExpiresAt(): number;
    setExpiresAt(value: number): Entry;
    clearDnsNamesList(): void;
    getDnsNamesList(): Array<string>;
    setDnsNamesList(value: Array<string>): Entry;
    addDnsNames(value: string, index?: number): string;
    getRevisionNumber(): number;
    setRevisionNumber(value: number): Entry;
    getStoreSvid(): boolean;
    setStoreSvid(value: boolean): Entry;
    getJwtSvidTtl(): number;
    setJwtSvidTtl(value: number): Entry;
    getHint(): string;
    setHint(value: string): Entry;
    getCreatedAt(): number;
    setCreatedAt(value: number): Entry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Entry.AsObject;
    static toObject(includeInstance: boolean, msg: Entry): Entry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Entry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Entry;
    static deserializeBinaryFromReader(message: Entry, reader: jspb.BinaryReader): Entry;
}

export namespace Entry {
    export type AsObject = {
        id: string,
        spiffeId?: spire_api_types_spiffeid_pb.SPIFFEID.AsObject,
        parentId?: spire_api_types_spiffeid_pb.SPIFFEID.AsObject,
        selectorsList: Array<spire_api_types_selector_pb.Selector.AsObject>,
        x509SvidTtl: number,
        federatesWithList: Array<string>,
        admin: boolean,
        downstream: boolean,
        expiresAt: number,
        dnsNamesList: Array<string>,
        revisionNumber: number,
        storeSvid: boolean,
        jwtSvidTtl: number,
        hint: string,
        createdAt: number,
    }
}

export class EntryMask extends jspb.Message { 
    getSpiffeId(): boolean;
    setSpiffeId(value: boolean): EntryMask;
    getParentId(): boolean;
    setParentId(value: boolean): EntryMask;
    getSelectors(): boolean;
    setSelectors(value: boolean): EntryMask;
    getX509SvidTtl(): boolean;
    setX509SvidTtl(value: boolean): EntryMask;
    getFederatesWith(): boolean;
    setFederatesWith(value: boolean): EntryMask;
    getAdmin(): boolean;
    setAdmin(value: boolean): EntryMask;
    getDownstream(): boolean;
    setDownstream(value: boolean): EntryMask;
    getExpiresAt(): boolean;
    setExpiresAt(value: boolean): EntryMask;
    getDnsNames(): boolean;
    setDnsNames(value: boolean): EntryMask;
    getRevisionNumber(): boolean;
    setRevisionNumber(value: boolean): EntryMask;
    getStoreSvid(): boolean;
    setStoreSvid(value: boolean): EntryMask;
    getJwtSvidTtl(): boolean;
    setJwtSvidTtl(value: boolean): EntryMask;
    getHint(): boolean;
    setHint(value: boolean): EntryMask;
    getCreatedAt(): boolean;
    setCreatedAt(value: boolean): EntryMask;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EntryMask.AsObject;
    static toObject(includeInstance: boolean, msg: EntryMask): EntryMask.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EntryMask, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EntryMask;
    static deserializeBinaryFromReader(message: EntryMask, reader: jspb.BinaryReader): EntryMask;
}

export namespace EntryMask {
    export type AsObject = {
        spiffeId: boolean,
        parentId: boolean,
        selectors: boolean,
        x509SvidTtl: boolean,
        federatesWith: boolean,
        admin: boolean,
        downstream: boolean,
        expiresAt: boolean,
        dnsNames: boolean,
        revisionNumber: boolean,
        storeSvid: boolean,
        jwtSvidTtl: boolean,
        hint: boolean,
        createdAt: boolean,
    }
}
