import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AuthConfig } from "./config/auth.config";
import { AppConfig } from "./config/app.config";
import { SpiffeStrategy } from "./spiffe.strategy";
import { SpiffeAuthService } from "./spiffe-auth.service";
import { HttpModule } from "@nestjs/axios";
import { ConfigModule } from "@nestjs/config";
import { AppService } from "./app.service";

describe('AppController', () => {
  let appController: AppController;

  const games = [
    {
      id: 1,
      title: 'Big Racing',
      vendor: 'Cayetano',
      RTP: '97%',
    },
    {
      id: 2,
      title: 'Amazon Rayne',
      vendor: 'CoreGaming',
      RTP: '96.5%',
    },
  ];

  const mockAppService = {
    // Suppose your service has a method called 'getData()'
    getAllGames: jest.fn().mockImplementation((request: any) => {
      return games;
    }),
    getGame: jest.fn().mockImplementation((id :number, request: any) => {
      return games.filter((game) => game.id == id)
    }),
    updateGame: jest.fn().mockImplementation((game: any, request: any) => {
      return game
    }),

  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: ".env",
      })],
      controllers: [AppController],
      providers: [{
        provide: AppService, // The token of the actual service
        useValue: mockAppService, // Your mock service
      }, AuthConfig, AppConfig, SpiffeStrategy, SpiffeAuthService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return json', async () => {
      expect(await appController.getGame(1, {})).toStrictEqual(games.filter((g)=>g.id==1));
    });
  });
});
