import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";

import { AppService } from "./app.service";

import { Roles } from "./roles.decorator";
import { RolesGuard } from "./roles-guard.service";


      @Controller('games')

      export class AppController {
      constructor(private readonly appService: AppService) {

      }

      @Get()
      @Roles('public')
      @UseGuards(RolesGuard)
      getAllGames(): any[] {
        return this.appService.getAllGames();
      }

      @Get(':id')
      @Roles('public')
      @UseGuards(RolesGuard)
      getGame(@Param() id): any {
        return this.appService.getGame(id);
      }

      @Post()
      @Roles('admin')
      @UseGuards(RolesGuard)
      updateGame(@Body() game: any): any {
        return this.appService.updateGame(game);
      }
    }