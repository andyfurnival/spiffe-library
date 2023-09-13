import { Strategy } from 'passport-http-bearer';
import { SpiffeAuthService } from "./spiffe-auth.service";
export declare class SpiffeStrategy extends Strategy<any> {
    private readonly authService;
    constructor(authService: SpiffeAuthService);
}
