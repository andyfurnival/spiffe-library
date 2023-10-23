import { Body, Controller, Get, Header, Param, Post, Req, UseGuards, HttpCode, HttpStatus } from "@nestjs/common";
import { AppService } from "./app.service";
import { Roles } from "./roles.decorator";
import { RolesGuard } from "./roles-guard.service";



      @Controller('games')

      export class AppController {
      constructor(private readonly appService: AppService) {

      }

      @Get('/identify')
      @Header('Cache-Control', 'no-cache')
      @HttpCode(HttpStatus.OK)
      async identify( ): Promise<string> {
        return await this.appService.identify();
      }

      @Get('/whoami')
      @Header('Cache-Control', 'no-cache')
      @Roles('public')
      @UseGuards(RolesGuard)
      async whoami( @Req() request): Promise<any> {
        return request.JWT.sub;
      }

      @Get()
      @Header('Cache-Control', 'no-cache')
      @Roles('readonly')
      @UseGuards(RolesGuard)
      async getAllGames( @Req() request): Promise<any[]> {
        return await this.appService.getAllGames(request);
      }

      @Get(':id')
      @Header('Cache-Control', 'no-cache')
      @Roles('readonly')
      @UseGuards(RolesGuard)
      async getGame(@Param() id, @Req() request): Promise<any> {
        return await this.appService.getGame(id, request);
      }

      @Post()
      @Roles('admin')
      @UseGuards(RolesGuard)
      async updateGame(@Body() game: any, @Req() request): Promise<any> {
        return await this.appService.updateGame(game, request);
      }
    }