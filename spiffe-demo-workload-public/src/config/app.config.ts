import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AppConfig {
  constructor(private configService: ConfigService) {}


  public serviceEndpoint: string = this.configService.get<string>("SERVICE_ENDPOINT");
  public disableSecurity: boolean = this.configService.get<boolean>("DISABLE_SECURITY");

}