import { Injectable, Logger } from '@nestjs/common';
import * as process from 'process';
import { decode } from 'jsonwebtoken';
import {
  AdminConfig,
  AdminSpireClient,
  EntryServer,
  IdentitySpireClient,
  JwtSvid,
  SpiffeJwtPayload,
  WorkloadSpireClient,
} from 'ts-spiffe';
import { SpireConfigService } from './config';

@Injectable()
export class AppService {
  private adminConfig: AdminConfig;
  private adminClient: AdminSpireClient;
  private identiyClient: IdentitySpireClient;
  private workloadCLient: WorkloadSpireClient;

  constructor(private readonly config: SpireConfigService) {
    this.adminConfig = this.config.getAdminConfig();
    this.adminClient = new AdminSpireClient(this.adminConfig);
    this.identiyClient = new IdentitySpireClient(
      this.config.getIdentityConfig(),
    );
    this.workloadCLient = new WorkloadSpireClient(
      this.config.getWorkloadConfig(),
    );
  }
  private readonly logger = new Logger(AppService.name);

  async generateSpiffeID(user: any): Promise<SpiffeJwtPayload> {
    return new Promise((resolve, _reject) => {
      const access_token = user.access_token;
      const jwt = decode(access_token, { complete: true });
      this.logger.log(jwt);
      const roles = Object.keys(process.env).filter((name) =>
        name.startsWith('ROLE'),
      );
      const spiffeRoles: string[] = [];

      const jwt_claims_roles = jwt.payload['roles'];

      roles.forEach((r) => {
        jwt_claims_roles.forEach((c) => {
          if (`role_${c.toLowerCase()}` === r.toLowerCase()) {
            spiffeRoles.push(process.env[r].toLowerCase());
          }
        });
      });
      const spiffe_id =
        'spiffe://' +
        process.env.SPIFFE_TRUSTDOMAIN +
        '/user/'+ jwt.payload.sub.toString().replace('@', '_at_') +
        '/roles_' +
        spiffeRoles.map((r) => r).join('.');
      resolve({ spiffeId: spiffe_id, audience: spiffeRoles });
    });
  }

  async registerWorkload(spiffePermission: SpiffeJwtPayload): Promise<JwtSvid> {
    const client = new EntryServer(
      this.adminClient,
      this.identiyClient,
      this.workloadCLient,
      this.adminConfig,
    );
    return await client.registerUser(spiffePermission);
  }
}
