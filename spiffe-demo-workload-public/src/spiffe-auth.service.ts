import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtSource, JwtSvid } from "ts-spiffe";
import { AuthConfig } from "./config/auth.config";
import { WorkloadSpireClient } from "ts-spiffe";

@Injectable()
export class SpiffeAuthService {
  constructor( private readonly config: AuthConfig) { }
  async validateToken(token: string, roles: string): Promise<any> {
    if(token === undefined){
      throw new UnauthorizedException("No Token")
    }

    const svid = new JwtSvid(token);
    if(svid.isExpired()){
      throw new UnauthorizedException("Token has expired")
    }

    const jwtSource = new JwtSource(new WorkloadSpireClient(this.config.workloadConfig),this.config.workloadConfig)
    try {
      const resp = await jwtSource.validateJWTSvid(token, roles[0])
      return resp.JWT;
    }
    catch(error){
      console.log(error)
      throw error;
    }
  }

}