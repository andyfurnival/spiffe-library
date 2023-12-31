import { UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import {
  Client,
  Issuer,
  Strategy,
  TokenSet,
  UserinfoResponse,
} from 'openid-client';
import { AuthService } from './auth.service';

export const buildOpenIdClient = async () => {
  const TrustIssuer = await Issuer.discover(
    `${process.env.OIDC_ISSUER}/.well-known/openid-configuration`,
  );
  return new TrustIssuer.Client({
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
  });
};

export class OidcStrategy extends PassportStrategy(Strategy, 'oidc') {
  client: Client;

  constructor(
    private readonly authService: AuthService,
    client: Client,
  ) {
    super({
      client: client,
      params: {
        redirect_uri: process.env.LOGIN_REDIRECT_URI,
        scope: process.env.LOGIN_SCOPE,
      },
      passReqToCallback: false,
      usePKCE: true,
    });

    this.client = client;
  }
  //http://localhost:3000/callback?code=PulfCEvVfVJZjW49mmaWhBiy7iJPnZhrWcgAH1PqfEQ&state=uryVbGVu2GVqaMrd4kK3zPQsctIQS6Ri0VhIUy8dhCA
  async validate(tokenset: TokenSet): Promise<any> {
    const userinfo: UserinfoResponse = await this.client.userinfo(tokenset);

    console.log(tokenset);
    try {
      const id_token = tokenset.id_token;
      const access_token = tokenset.access_token;
      const refresh_token = tokenset.refresh_token;
      const claims = tokenset.claims();
      return {
        id_token,
        access_token,
        refresh_token,
        userinfo,
        claims,
      };
    } catch (err) {
      throw new UnauthorizedException();
    }
  }
}
