export declare class AppService {
    games: {
        id: number;
        title: string;
        vendor: string;
        RTP: string;
    }[];
    getAllGames(): any[];
    getGame(params: any): any;
    updateGame(game: any): any;
}
