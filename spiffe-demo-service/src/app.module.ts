import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { AuthConfig } from "./config/auth.config";



@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: ".env",
  })],
  controllers: [AppController],
  providers: [AppService, AuthConfig
  ]
})
export class AppModule {}
