import { Controller, Get, Logger, Req, Res, Response, UseGuards } from "@nestjs/common";
import { AppService } from "./app.service";
import { AuthenticatedGuard } from "./guards/authenticated.guard";


@UseGuards(AuthenticatedGuard)
@Controller()
export class AppController {

  private readonly logger = new Logger(AppController.name);


  constructor(private readonly appService: AppService) {}

  @Get('/')
  @UseGuards(AuthenticatedGuard)
  async index(@Req() req, @Res({ passthrough: true }) res: Response){

    // get claims
    // generate the spiffe id
    this.logger.log(req.user)
    const result = await this.appService.generateSpiffeID(req.user);

    const jwt_svid = await this.appService.registerWorkload(result);

    // @ts-ignore
    res.cookie('spiffe_svid', jwt_svid.getToken())

    return   jwt_svid.getToken() ;
  }
}
