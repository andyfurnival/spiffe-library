// package: spire.api.types
// file: spire/api/types/selector.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Selector extends jspb.Message { 
    getType(): string;
    setType(value: string): Selector;
    getValue(): string;
    setValue(value: string): Selector;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Selector.AsObject;
    static toObject(includeInstance: boolean, msg: Selector): Selector.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Selector, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Selector;
    static deserializeBinaryFromReader(message: Selector, reader: jspb.BinaryReader): Selector;
}

export namespace Selector {
    export type AsObject = {
        type: string,
        value: string,
    }
}

export class SelectorMatch extends jspb.Message { 
    clearSelectorsList(): void;
    getSelectorsList(): Array<Selector>;
    setSelectorsList(value: Array<Selector>): SelectorMatch;
    addSelectors(value?: Selector, index?: number): Selector;
    getMatch(): SelectorMatch.MatchBehavior;
    setMatch(value: SelectorMatch.MatchBehavior): SelectorMatch;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SelectorMatch.AsObject;
    static toObject(includeInstance: boolean, msg: SelectorMatch): SelectorMatch.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SelectorMatch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SelectorMatch;
    static deserializeBinaryFromReader(message: SelectorMatch, reader: jspb.BinaryReader): SelectorMatch;
}

export namespace SelectorMatch {
    export type AsObject = {
        selectorsList: Array<Selector.AsObject>,
        match: SelectorMatch.MatchBehavior,
    }

    export enum MatchBehavior {
    MATCH_EXACT = 0,
    MATCH_SUBSET = 1,
    MATCH_SUPERSET = 2,
    MATCH_ANY = 3,
    }

}
