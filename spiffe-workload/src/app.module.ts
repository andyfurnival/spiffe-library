import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { AuthConfig } from "./config/auth.config";
import { SpiffeStrategy } from "./spiffe.strategy";
import { SpiffeAuthService } from "./spiffe-auth.service";


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: ".env",
  })],
  controllers: [AppController],
  providers: [AppService, AuthConfig,
    SpiffeStrategy,
    SpiffeAuthService
  ]
})
export class AppModule {}
