import * as jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";

export class JwtSvid {
    private token: string;
    private jwtPayload: JwtPayload;

    private expiration: Date;
    constructor(token: string) {
      this.token = token;
      const payload = jwt.decode(token)

      this.jwtPayload = payload as JwtPayload
      this.expiration = new Date(1000 * <number>this.jwtPayload?.exp);
    }



  isExpired(): boolean {
        return new Date() > this.expiration;
    }

  getAudiences(): string | string[] | undefined {
    return this.jwtPayload.aud;
  }
  getSubject(): string {
      return <string>this.jwtPayload.sub;
    }

    getToken(): string{
      return this.token;
    }
}
