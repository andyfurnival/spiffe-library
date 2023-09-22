import { ConfigService } from "@nestjs/config";
import { AdminConfig } from "ts-spiffe/build/src/config";
import { Injectable } from "@nestjs/common";
import { WorkloadConfig } from "ts-spiffe/build/src";

@Injectable()
export class SpireConfigService {
  constructor(private configService: ConfigService) {}

  getAdminConfig(): AdminConfig {
    return {
      adminSpiffeId: this.configService.get<string>('ADMIN_SPIFFE_ID'),
      spireEndpoint: this.configService.get<string>('ADMIN_SPIRE_ENDPOINT'),
      parentSpiffeId: this.configService.get<string>('PARENT_SPIFFE_ID'),
      trustDomain: this.configService.get<string>('SPIFFE_TRUSTDOMAIN'),
      JwtTTL: this.configService.get<number>('ADMIN_JWT_TTL_HOURS'),
    };
  }


    getWorkloadConfig(): WorkloadConfig {
      return {
        spireEndpoint: this.configService.get<string>('WORKLOAD_SPIRE_ENDPOINT'),
        trustDomain: this.configService.get<string>('SPIFFE_TRUSTDOMAIN'),
        reconnectInterval: this.configService.get<number>('WORKLOAD_RECONNECT_INTERVAL'),
      };
  }

  getIdentityConfig(): WorkloadConfig {
    return {
      spireEndpoint: this.configService.get<string>('DELEGATED_ID_SPIRE_ENDPOINT'),
      reconnectInterval: this.configService.get<number>('DELEGATED_ID_RECONNECT_INTERVAL'),
    };
  }
}