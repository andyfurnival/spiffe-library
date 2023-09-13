import { AuthConfig } from "./config/auth.config";
export declare class SpiffeAuthService {
    private readonly config;
    constructor(config: AuthConfig);
    validateToken(token: string, roles: string): Promise<any>;
}
