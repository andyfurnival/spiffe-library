import { ExecutionContext, CanActivate } from "@nestjs/common";
import { SpiffeAuthService } from "./spiffe-auth.service";
import { Observable } from "rxjs";
export declare class RolesGuard implements CanActivate {
    private externalService;
    constructor(externalService: SpiffeAuthService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
