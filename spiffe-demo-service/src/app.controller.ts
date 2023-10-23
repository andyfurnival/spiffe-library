import {
      Body,
      Controller,
      Get,
      Param,
      Post,
      Req,
      UseGuards,
      Logger,
      Header,
      HttpStatus,
      HttpCode
} from "@nestjs/common";

import { AppService } from "./app.service";

import { Roles } from "./roles.decorator";
import { RolesGuard } from "./roles-guard.service";


      @Controller('games')
      export class AppController {
            constructor(private readonly appService: AppService) {

            }

            private readonly logger = new Logger(AppController.name);

            @Get('/identify')
            @Header('Cache-Control', 'no-cache')
            @HttpCode(HttpStatus.OK)
            async identify( ): Promise<string> {
                  return await this.appService.identify();
            }

            @Get()
            @Header('Cache-Control', 'no-cache')
            @UseGuards(RolesGuard)
            async getAllGames(@Req() request): Promise<any[]> {
                  this.logger.debug(request.headers)
                  const result = this.appService.getAllGames();
                  this.logger.debug(result)
                  return result;
            }

            @Get(':id')
            @Header('Cache-Control', 'no-cache')
            @UseGuards(RolesGuard)
            async getGame(@Param() id:number, @Req() request): Promise<any> {
                  this.logger.debug(request.headers)
                  const result =  this.appService.getGame(id);
                  this.logger.debug(result)
                  return result;
            }

            @Post()
            @UseGuards(RolesGuard)
            async updateGame(@Body() game: any, @Req() request): Promise<any> {
                  this.logger.debug(request.headers)
                  return this.appService.updateGame(game);
            }
      }