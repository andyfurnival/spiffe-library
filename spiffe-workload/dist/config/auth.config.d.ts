import { WorkloadConfig } from "@flutterint/ts-spiffe/build/src";
import { ConfigService } from "@nestjs/config";
export declare class AuthConfig {
    private configService;
    constructor(configService: ConfigService);
    spiffe_id: string;
    workloadConfig: WorkloadConfig;
}
