import { Module } from "@nestjs/common";
import { ConfigService } from "./config.service";
import * as process from "process";

@Module({
  providers: [{
    provide: ConfigService,
    useValue: new ConfigService(`${process.env.NODE_ENV || ''}.env`)
  }],
  exports: [ConfigService],
})

export class ConfigModule{}