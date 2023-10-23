import { Injectable, Logger } from "@nestjs/common";
import { HttpService } from '@nestjs/axios';
import * as https from 'https';
import { WorkloadSpireClient, X509Source, X509Svid } from 'ts-spiffe';
import { AuthConfig } from './config/auth.config';
import { AppConfig } from './config/app.config';
import { firstValueFrom } from "rxjs";


@Injectable()
export class AppService  {
  constructor(
    private readonly authConfig: AuthConfig,
    private readonly appConfig: AppConfig,
    private httpService: HttpService
  ) {}

  private readonly logger = new Logger(AppService.name);

  async identify(): Promise<any> {
    try {
      const svid = await this.requestx509Svid();
      if(!svid){
        return "No identity exists"
      }
      return svid.spiffeId;

    } catch (error) {
      return "No identity exists " 
    }
    
  }

  async getAllGames(request: Request): Promise<any[]> {
    return await this.fetchGame( request)

  }

  async getGame(id: number, request: Request): Promise<any> {
    return await this.fetchGame(request, id)
  }

  async updateGame(game: any, request: Request): Promise<any> {
    return game;
  }

  private async fetchGame(
    request: Request,
    id?: number,
  ): Promise<any> {
    try {

      // @ts-ignore reason: the interpolation returns an object when just using ${id}
      let query = id?`${id?.id || ''}` : '';

      const forwardedHeaders = { ...request.headers };
      delete forwardedHeaders['host'];
      let response;

      if (!this.appConfig.disableSecurity) {
        const svid = await this.requestx509Svid();
        const x509svid = new X509Svid(
          svid.leaf,
          svid.key,
          svid.hint,
          svid.bundle,
        );

        this.logger.debug(await x509svid.getLeafAsPEM())
        this.logger.debug(await x509svid.getIntermediateAsPEM())
        this.logger.debug(await x509svid.getKeyAsPEM())
        this.logger.debug(await x509svid.getBundleAsPEM())

        const config = {
          headers: forwardedHeaders as any,
          httpsAgent: new https.Agent({
            rejectUnauthorized: true, // set to `false` if the server uses a self-signed certificate and you don't provide the CA.
            cert: await x509svid.getLeafAsPEM() + "\n"+ await x509svid.getIntermediateAsPEM(),
            key: await x509svid.getKeyAsPEM(),
            ca: await x509svid.getBundleAsPEM(),
          }),

        }
        response = await firstValueFrom(this.httpService.get(`${this.appConfig.serviceEndpoint}/games/` + query, config));
      } else {
        const config = {
          headers: forwardedHeaders as any,
        }
        response = await firstValueFrom(this.httpService.get(`${this.appConfig.serviceEndpoint}/games/`+ query.toString(), config));
      }


      this.logger.log(response.data);
      return response.data;

    } catch (error) {
      this.logger.error('Error fetching data: ', error);
      throw error;
    }
  }


  async requestx509Svid(): Promise<svid | undefined> {
    const x509 = new X509Source(
      new WorkloadSpireClient(this.authConfig.workloadConfig),
      this.authConfig.workloadConfig,
    );
    const stream = x509.fetchX509Svid();
    for await (const svid of stream) {
      const svids = svid.SVID.svids;
      for (const svidsKey in svids) {
        if (svids[svidsKey].spiffeId == this.authConfig.spiffe_id) {
          return {
            leaf: svids[svidsKey].x509Svid,
            key: svids[svidsKey].x509SvidKey,
            bundle: svids[svidsKey].bundle,
            hint: svids[svidsKey].hint,
            spiffeId: svids[svidsKey].spiffeId,
          };
        }
      }
      break;
    }
    return undefined;
  }
}
interface svid {
  leaf: Uint8Array,
  key: Uint8Array,
  bundle: Uint8Array,
  hint: string,
  spiffeId: string
}