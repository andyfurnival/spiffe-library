import { TrustDomain } from "./TrustDomain";
import { CertificateError, IllegalArgumentError, InvalidSpiffeIdError } from "../exception";
import { isEmpty } from "@qntm-code/utils";
import { SubjectAlternativeNameExtension, X509Certificate } from "@peculiar/x509";
import { Certificate } from "pkijs";


export class SpiffeId {
  private readonly trustDomain: TrustDomain;
  private readonly path: string;

  static readonly SPIFFE_SCHEME : string = "spiffe";
  static readonly SCHEME_PREFIX : string = this.SPIFFE_SCHEME + "://";
  static readonly EMPTY : string = "Cannot be empty"
  static readonly MISSING_TRUST_DOMAIN : string = "Trust domain is missing";
  static readonly BAD_TRUST_DOMAIN_CHAR : string = "Trust domain characters are limited to lowercase letters, numbers, dots, dashes, and underscores"
  static readonly BAD_PATH_SEGMENT_CHAR : string = "Path segment characters are limited to letters, numbers, dots, dashes, and underscores";
  static readonly WRONG_SCHEME : string = "Scheme is missing or invalid";
  static readonly DOT_SEGMENT : string = "Path cannot contain dot segments";
  static readonly EMPTY_SEGMENT : string = "Path cannot contain empty segments";
  static readonly TRAILING_SLASH : string = "Path cannot have a trailing slash";


  constructor(trustDomain: TrustDomain, path: string) {
    this.trustDomain = trustDomain;
    this.path = path;
  }


  public getTrustDomain() : TrustDomain{
    return this.trustDomain
  }

  public getPath() : string{
    return this.path;
  }

  public static getTrustDomain(chain: X509Certificate[]): TrustDomain {
    const spiffeId = this.getSpiffeId(chain[0]);
    return spiffeId.getTrustDomain();
  }

  public static getSpiffeId(certificate: X509Certificate | undefined): SpiffeId {


    if(certificate === undefined) throw new Error("certificate cannot be undefined")

    const spiffeIds = this.getSpiffeIds(certificate);

    if (spiffeIds.length > 1) {
      throw new CertificateError("Certificate contains multiple SPIFFE IDs");
    }

    if (spiffeIds.length < 1) {
      throw new CertificateError("Certificate does not contain SPIFFE ID in the URI SAN");
    }

    return SpiffeId.parse(spiffeIds[0]);

  }
  public static getSpiffeIds(certificate: X509Certificate): string[] {

    new Certificate()
    const sanExtension = certificate.extensions?.find((ext) => ext.type === "2.5.29.17") as SubjectAlternativeNameExtension;
    if (!sanExtension) {
      return [];
    }

    return sanExtension.names.items.map((san) => san.value).filter((value) => value.startsWith(this.SCHEME_PREFIX))
  }

  public toString() : string{
    return `${(SpiffeId.SPIFFE_SCHEME)}://${this.trustDomain.toString()}${this.path}`;
  }
  static parse(id: string) : SpiffeId
  {
    if (!id.includes(SpiffeId.SCHEME_PREFIX)) {
      throw new InvalidSpiffeIdError(this.WRONG_SCHEME);
    }

    const rest : string = id.substring(this.SCHEME_PREFIX.length);

    const chars = [...rest];
    let i : number = 0;

    for (const c in chars) {
      if (chars[c] == "/"){
        break;
      }

      if (!TrustDomain.isValidTrustDomainChar(c)) {
        throw new InvalidSpiffeIdError(this.BAD_TRUST_DOMAIN_CHAR);
      }
      i++;
    }
    if (i == 0) {
      throw new InvalidSpiffeIdError(this.MISSING_TRUST_DOMAIN);
    }

    const td = rest.substring(0, i);
    const path = rest.substring(i);


    if (!isEmpty(path)) {
      SpiffeId.validatePath(path);
    }

    return new SpiffeId(new TrustDomain(td), path);
  }

  static validatePath(path: string) {
    if(isEmpty(path)) {
      throw new IllegalArgumentError(SpiffeId.EMPTY);
    }

    let segmentStart : number = 0;
    let segmentEnd : number = 0;

    for ( ; segmentEnd < path.length; segmentEnd++) {
      const c = path.charAt(segmentEnd);
      if (c == '/') {
        switch (path.substring(segmentStart, segmentEnd)) {
          case "/":
            throw new InvalidSpiffeIdError(SpiffeId.EMPTY_SEGMENT);
          case "/.":
          case "/..":
            throw new InvalidSpiffeIdError(SpiffeId.DOT_SEGMENT);
        }
        segmentStart = segmentEnd;
        continue;
      }
      if (!SpiffeId.isValidPathSegmentChar(c)) {
        throw new InvalidSpiffeIdError(SpiffeId.BAD_PATH_SEGMENT_CHAR + ". Supplied: " + path);
      }

    }
    switch (path.substring(segmentStart, segmentEnd)) {
      case "/":
        throw new InvalidSpiffeIdError(SpiffeId.TRAILING_SLASH);
      case "/.":
      case "/..":
        throw new InvalidSpiffeIdError(SpiffeId.DOT_SEGMENT);
    }

  }

  static isValidPathSegmentChar(c : string) : boolean {
    if (c >= 'a' && c <= 'z')
      return true;
    if (c >= 'A' && c <= 'Z')
      return true;
    if (c >= '0' && c <= '9')
      return true;
    return c == '-' || c == '.' || c == '_' || c == ':'|| c == ',';
  }

  static fromSegments(trustDomain: TrustDomain, segments: string[]) {
    const path : string = "";
    for (const segmentsKey in segments) {
      SpiffeId.validatePath(segmentsKey);
      path.concat('/')
      path.concat(segmentsKey)
    }
    return new SpiffeId(trustDomain, path);
  }
}
