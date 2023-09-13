import { AppService } from "./app.service";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getAllGames(): any[];
    getGame(id: any): any;
    updateGame(game: any): any;
}
