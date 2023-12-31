import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { buildOpenIdClient, OidcStrategy } from './oidc.strategy';
import { SessionSerializer } from './session.serializer';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

const OidcStrategyFactory = {
  provide: 'OidcStrategy',
  useFactory: async (authService: AuthService) => {
    const client = await buildOpenIdClient(); // secret sauce! build the dynamic client before injecting it into the strategy for use in the constructor super call.
    return new OidcStrategy(authService, client);
  },
  inject: [AuthService],
};

@Module({
  imports: [
    PassportModule.register({ session: true, defaultStrategy: 'oidc' }),
  ],
  controllers: [AuthController],
  providers: [OidcStrategyFactory, SessionSerializer, AuthService],
})
export class AuthModule {}
