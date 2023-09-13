import { SpiffeId } from "./SpiffeId";
import { InvalidSpiffeIdError } from "../exception";

export class TrustDomain {

  private readonly name: string
  constructor(trustDomain : string) {
    this.name = trustDomain
  }


  public toString() : string{
    return this.name
  }

  public toIdString() : string{
    return SpiffeId.SPIFFE_SCHEME + "://" + this.name;
  }



  public newSpiffeId(...segments:string[]) : SpiffeId{
    return SpiffeId.fromSegments(this, segments);
  }
  static parse(idOrName: string) : TrustDomain{

    if (idOrName.includes(":/")) {
      const spiffeId : SpiffeId = SpiffeId.parse(idOrName);
      return spiffeId.getTrustDomain();
    }

    TrustDomain.validateTrustDomainName(idOrName);
    return new TrustDomain(idOrName);
  }

  static validateTrustDomainName( name : string){

    const chars = [...name];
    for (const c in chars) {
      if (!TrustDomain.isValidTrustDomainChar(c)) {
        throw new InvalidSpiffeIdError(SpiffeId.BAD_TRUST_DOMAIN_CHAR);
      }
    }
  }
  static isValidTrustDomainChar(c: string) : boolean{
    if (c >= 'a' && c <= 'z') {
      return true;
    }

    if (c >= '0' && c <= '9') {
      return true;
    }

    return c == '-' || c == '.' || c == '_';
  }
}
