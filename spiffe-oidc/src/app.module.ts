import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpireConfigService } from './config/SpireConfigService';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule],
  providers: [AppService, SpireConfigService],
  controllers: [AppController],
})
export class AppModule {}
