import { Strategy } from "passport-http-bearer";
import { Injectable } from "@nestjs/common";
import { SpiffeAuthService } from "./spiffe-auth.service";
import { request } from "express";

@Injectable()
export class SpiffeStrategy extends Strategy<any> {
  constructor(private readonly authService: SpiffeAuthService) {
    super(async (token, done)=>{
      try {
        // @ts-ignore
        const roles = request.roles

        const jwtSvid = await this.authService.validateToken(token, roles[0]);
        if (!jwtSvid) {
          return done(null, false);
        }
        return done(null, jwtSvid);

      }
      catch(error)
      {
        return done(error, false);
      }
    });
  }
}