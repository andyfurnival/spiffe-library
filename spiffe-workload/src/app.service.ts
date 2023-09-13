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

  getAllGames(): any[]{
    return this.games
  }

  getGame(params: any): any{
    return this.games.filter((g) => g.id == params.id)[0]
  }

  updateGame(game: any): any{
      return game;
}
}