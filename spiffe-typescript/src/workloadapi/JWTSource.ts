import { EventEmitter } from "events";
import { JwtSvid } from "../svid";
import { JwtBundle } from "../bundle";
import { JWTBundlesRequest, JWTSVIDRequest, ValidateJWTSVIDRequest } from "../proto/public/workload";
import { Middleware } from "./Middleware";
import { WorkloadClient } from "./WorkloadClient";
import { AuthenticationTokenMissingError } from "../exception/AuthenticationTokenMissingError";
import { TokenExpiredError } from "../exception";
import { WorkloadConfig } from "../config";
import { Logger } from '../internal/Logger';

export class JwtSource {
    private svid: JwtSvid[] = [];
    private bundle: JwtBundle[] = [];
  private logger = new Logger(JwtSource);
    private workloadAPIClient: WorkloadClient; // This will represent our gRPC client
    private watcher: EventEmitter;
    private reconnectInterval: number = 5000; // 5 seconds
    private stream: any;
    private cache: Map<string, JwtSvid[] | JwtBundle[]>;
    private middlewares: Middleware[] = [];
    private trustDomain: string;

    constructor(spiffeClient: WorkloadClient, config?: WorkloadConfig) {
        this.workloadAPIClient = spiffeClient;
        this.watcher = new EventEmitter();
        this.startWatcher();
        this.cache = new Map();
        this.trustDomain = ((config?.trustDomain) != null)?  config?.trustDomain : 'server.fs.com'

    }

    addMiddleware(middleware: Middleware) {
        this.middlewares.push(middleware);
    }

    private startWatcher() {

        this.watcher.on('update', () => {
            this.fetchJwtSvid('spiffeId', 'audience1', 'audience2'); // Replace placeholders with actual values
            this.fetchJwtBundle(this.trustDomain); // Replace 'trustDomain' with the actual trust domain
        });

    }


    async fetchJwtSvid(spiffeId: string, ...audiences: string[]) {
        const request: JWTSVIDRequest = {
          audience: audiences,
          spiffeId: spiffeId,
        };
        try {


            const message =  await this.workloadAPIClient.fetchJWTSVID(request);
                return {JWT: message?.svids};


        } catch (error) {
            // Handle the error as needed
          this.logger.error(`${error}`)
            throw new Error("Could not Fetch JWT SVID")
        }

    }


   async *fetchJwtBundle(trustDomain: string) {
       const request : JWTBundlesRequest = {};
       try {
           for await (const message of this.workloadAPIClient.fetchJWTBundles(request)) {

               yield {Bundles: message?.bundles};
           }
       } catch (error) {
           // Handle the error as needed
         this.logger.error(`${error}`)
       }
   }

   async validateJWTSvid(svid : string, audience: string){
       const request: ValidateJWTSVIDRequest = {
         audience: audience,
         svid: svid,
       };
       try {

           const message =  await this.workloadAPIClient.validateJWTSVID(request);
           return {JWT: message};


       } catch (error ) {
           this.logger.error(`${error}`)
           if (error instanceof AuthenticationTokenMissingError)
               throw error;
           else if (error instanceof TokenExpiredError)
               throw error
           else
                throw new Error("Could not validate JWT SVID " + error)
       }
   }

    close() {
        this.stream.end();
        this.watcher.removeAllListeners();
    }
}
