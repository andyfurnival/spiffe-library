import { JwtSvid, X509Svid } from "../svid";

export interface Middleware {
    processX509Svid(svid: X509Svid): X509Svid;
    processJwtSvid(svid: JwtSvid): JwtSvid;
}
