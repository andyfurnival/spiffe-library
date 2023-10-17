// jwt-auth.guard.ts
import { CanActivate, ExecutionContext, Injectable, Logger } from "@nestjs/common";
import { Observable } from "rxjs";
import { decode } from 'jsonwebtoken';

interface IXForwardedClientCert {
  By: string;
  Hash: string;
  URI: string;
}


@Injectable()
export class RolesGuard implements CanActivate {
  constructor() {
  }

  private readonly logger = new Logger(RolesGuard.name);

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    this.logger.debug(request.headers)
    const identity = request.headers['x-forwarded-client-cert']
    const parsedIdentity = this.parseIdentity(identity)

    if(!this.allowedServiceIdentites.includes(parsedIdentity.URI)) return false

    this.logger.log('service-target: ' + parsedIdentity.By) // this service
    this.logger.log('service-identity: ' + parsedIdentity.URI) // caller service

    const jwtIdentity = request.headers['authorization']
    if( !jwtIdentity) return true; // no identity was provided, so we can assume its a natural service to service call, no end user involved

    // potentially perform authorisation against the end user (human)
    const jwt = decode(jwtIdentity.replace('Bearer ', ''),{ complete: true })
    this.logger.debug(jwt)
    if(jwt)
      this.logger.log('end-user-identity: ' + jwt.payload.sub) // optional human end user

    // We have an end user
    return true;

  }

  readonly allowedServiceIdentites: string[] = ["spiffe://server.fs.com/workload/demo-public"]

  parseIdentity(identity: any) {
    if (!identity) {
      return null;
    }

    const result: Partial<IXForwardedClientCert> = {};

    // Split the header value by semicolon to get each part
    const parts = identity.split(';');

    // Iterate over each part and split by equal sign to separate the key and value
    parts.forEach(part => {
      const [key, value] = part.trim().split('=');

      // Check if the key and value both exist, then add them to the result object
      if (key && value) {
        result[key as keyof IXForwardedClientCert] = value;
      }
    });

    // Ensure all properties are set
    if ('By' in result && 'Hash' in result && 'URI' in result) {
      return result as IXForwardedClientCert;
    } else {
      throw new Error('Invalid header value: missing expected properties');
    }
  }
}


