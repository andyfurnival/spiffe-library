import { Injectable } from "@nestjs/common";
import { WorkloadConfig } from "@flutterint/ts-spiffe/build/src";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AuthConfig {
  constructor(private configService: ConfigService) {}


  public spiffe_id: string = this.configService.get<string>("SPIFFE_ID");
  public workloadConfig: WorkloadConfig = {
    spireEndpoint: this.configService.get<string>("WORKLOAD_ENDPOINT"),
    reconnectInterval: this.configService.get<number>("WORKLOAD_RECONNECT_INTERVAL")
  };
}