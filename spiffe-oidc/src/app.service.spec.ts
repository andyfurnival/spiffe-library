import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';

dotenv.config({ path: './.env' });
describe('AppService', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('token should be decoded and spiffeID generated', async () => {
    expect(await service.generateSpiffeID(TokenSet)).toBe(
      'spiffe://fs.server.com/user/roles:admin,public/',
    );
  });
});

const TokenSet = {
  id_token:
    'eyJraWQiOiJmdV9BTmYzRFgzV2J1UF9pZzZQSEdfM2JaZGd6UVFLS2xLcEpweEZKU1VRIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIwMHVhZnAxZmM5YU5qdFluUzVkNyIsInZlciI6MSwiaXNzIjoiaHR0cHM6Ly9kZXYtNDQ5MzgzOTAub2t0YS5jb20vb2F1dGgyL2F1c2Iwb3k0NjVGZ1M3ekFGNWQ3IiwiYXVkIjoiMG9hYWZwMTlzeTBTazROVWw1ZDciLCJpYXQiOjE2OTM1Nzk3NDYsImV4cCI6MTY5MzU4MzM0NiwianRpIjoiSUQuSUxJLS10bnQwVVdXVEF4cnBFaDRmT0ZEZ3lrR2V3SWZBU2RzVjBORmpSOCIsImFtciI6WyJwd2QiXSwiaWRwIjoiMDBvYWZvamV4ZWxwbWtkZjY1ZDciLCJhdXRoX3RpbWUiOjE2OTM1NjY2ODgsImF0X2hhc2giOiI2dk5oNWY2Y2lBZEtZVWc1VTZRTVJRIn0.ROHZDFi_invsBAHpE_v113gcQnDn4unSKt7cVljkqgsXTNZUIoeYx9FIBL7uFdjtoqHDjdCyW3L-jhkrsNMnO3MEsdUro-QHPBQkEdIYJHXxsB1RCer42H31HbGdC0fe1lUyR7DPIZfS3PTDaHnB9hPGUK7j90MuBdnGkviOoHLxNvEAvrpWbeqRlaotdTZNPQL8FNQJbFku5Z32LDM_x-B4ezMYV50eFK5DfUUjn-s7GPxnGF2fNTW75ayHFhx8ewgJVcJfrEyuhWthjR_HvzgUCxsqx23dsjBBZQbbMtWGdB08tTa_0n2pLb-UOGEzNHy67fUpYu0H0if6QhzRHg',
  access_token:
    'eyJraWQiOiJmdV9BTmYzRFgzV2J1UF9pZzZQSEdfM2JaZGd6UVFLS2xLcEpweEZKU1VRIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULkdYQ1pWN0lxV3FNNTBSTkxJcjB1Tm83NExqNDZYc2NUUklFZUoza25nR0EiLCJpc3MiOiJodHRwczovL2Rldi00NDkzODM5MC5va3RhLmNvbS9vYXV0aDIvYXVzYjBveTQ2NUZnUzd6QUY1ZDciLCJhdWQiOiJzcGlmZmU6Ly9zZXJ2ZXIuZnMuY29tIiwiaWF0IjoxNjkzNTc5NzQ2LCJleHAiOjE2OTM1ODMzNDYsImNpZCI6IjBvYWFmcDE5c3kwU2s0TlVsNWQ3IiwidWlkIjoiMDB1YWZwMWZjOWFOanRZblM1ZDciLCJzY3AiOlsiZ3JvdXBzIiwib3BlbmlkIl0sImF1dGhfdGltZSI6MTY5MzU2NjY4OCwic3ViIjoiZGVtb0BmdXJuaXZhbC5pbyIsInJvbGVzIjpbIkV2ZXJ5b25lIiwiU1BJRkZFX0FETUlOUyJdfQ.OzM3YFRW6bKTwGL_DOhd9s-VewR4Y0I2yYavZdAySYLt45ARoNoWgXukNYcvtSWsbPvwUdLXhv_6Y7_szzO5NmMoTZ3Qp7KVsE66ViMuX8sfMuzsDoe3_nUej3vzFimGshZWINTiDPxu16zhhIyl1LidTtwkic8un1QFg0rHCVD5lJk34jrVuo6iVHsNYxnnDweCc-r2JGBzhRoHQPd7mCBQqxdYCJp_Ks4d_btuTZ3pTkHM8HrMFqdeL11C41YDVHpUIlQcGqe9poJ5sgOPxWZuLgsF0c2-DYEUKOyCFUr6_IVh0m1wqMBmFu6rcMlLHoRkSrH5YHIlZaZBBYVaww',
  userinfo: {
    sub: '00uafp1fc9aNjtYnS5d7',
  },
  claims: {
    sub: '00uafp1fc9aNjtYnS5d7',
    ver: 1,
    iss: 'https://dev-44938390.okta.com/oauth2/ausb0oy465FgS7zAF5d7',
    aud: '0oaafp19sy0Sk4NUl5d7',
    iat: 1693579746,
    exp: 1693583346,
    jti: 'ID.ILI--tnt0UWWTAxrpEh4fOFDgykGewIfASdsV0NFjR8',
    amr: ['pwd'],
    idp: '00oafojexelpmkdf65d7',
    auth_time: 1693566688,
    at_hash: '6vNh5f6ciAdKYUg5U6QMRQ',
  },
};
