import { Injectable } from "@nestjs/common";
import { WorkloadSpireClient, X509Source } from "ts-spiffe";
import { AuthConfig } from "./config/auth.config";

@Injectable()
export class AppService {
  constructor(private readonly authConfig: AuthConfig) {
  }
  games = [
    {
      id: 1,
      title: 'Big Racing',
      vendor: 'Cayetano',
      RTP: '97%'
    },
    {
      id: 2,
      title: 'Amazon Rayne',
      vendor: 'CoreGaming',
      RTP: '96.5%'
    },
  ];

  async identify(): Promise<any> {
    try {
      const svid = await this.requestx509Svid();
      if (!svid) {
        return "No identity exists"
      }
      return svid.spiffeId;

    } catch (error) {
      return "No identity exists "
    }

  }

  async getAllGames(): Promise<any[]> {
    return this.games
  }

  async getGame(params: any): Promise<any> {
    return this.games.filter((g) => g.id == params.id)[0]
  }

  async updateGame(game: any): Promise<any> {
    return game;
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
