// jwt-auth.guard.ts
import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { SpiffeAuthService } from "./spiffe-auth.service";
import { Observable } from "rxjs";
import * as process from "process";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private externalService: SpiffeAuthService) {}

    canActivate(
      context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const role = Reflect.getMetadata('roles', context.getHandler()) || [];
      const token = request.headers.authorization?.replace('Bearer ', ''); // Assuming token is in the "Authorization" header

      if(process.env.DISABLE_SECURITY) return true
      return this.externalService.validateToken(token, role);
      
    } catch (error) {
      
      return false;
    }
     
  }
}

