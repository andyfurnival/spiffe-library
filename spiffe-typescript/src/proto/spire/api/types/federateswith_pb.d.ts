// package: spire.api.types
// file: spire/api/types/federateswith.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class FederatesWithMatch extends jspb.Message { 
    clearTrustDomainsList(): void;
    getTrustDomainsList(): Array<string>;
    setTrustDomainsList(value: Array<string>): FederatesWithMatch;
    addTrustDomains(value: string, index?: number): string;
    getMatch(): FederatesWithMatch.MatchBehavior;
    setMatch(value: FederatesWithMatch.MatchBehavior): FederatesWithMatch;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FederatesWithMatch.AsObject;
    static toObject(includeInstance: boolean, msg: FederatesWithMatch): FederatesWithMatch.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FederatesWithMatch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FederatesWithMatch;
    static deserializeBinaryFromReader(message: FederatesWithMatch, reader: jspb.BinaryReader): FederatesWithMatch;
}

export namespace FederatesWithMatch {
    export type AsObject = {
        trustDomainsList: Array<string>,
        match: FederatesWithMatch.MatchBehavior,
    }

    export enum MatchBehavior {
    MATCH_EXACT = 0,
    MATCH_SUBSET = 1,
    MATCH_SUPERSET = 2,
    MATCH_ANY = 3,
    }

}
