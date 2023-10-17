import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService{

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

  async getAllGames(): Promise<any[]>{
    return this.games
  }

  async getGame(params: any): Promise<any>{
    return this.games.filter((g) => g.id == params.id)[0]
  }

  async updateGame(game: any): Promise<any>{
      return game;
}
}