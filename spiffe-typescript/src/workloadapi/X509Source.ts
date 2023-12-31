import { EventEmitter } from "events";
import { X509Bundle } from "../bundle";
import { X509BundlesRequest, X509SVIDRequest } from "../proto/public/workload";
import { Middleware } from "./Middleware";
import { WorkloadConfig } from "../config";
import { WorkloadClient } from "./WorkloadClient";
import { X509Svid } from "../svid";
import { Logger } from '../internal/Logger';

export class X509Source {
    private svids: X509Svid[] = [];
    private bundles: X509Bundle[] = [];
    private workloadAPIClient: WorkloadClient; // This will represent our gRPC client
    private watcher: EventEmitter;
    private reconnectInterval: number = 5000; // 5 seconds
    private logger = new Logger(X509Source);
    private stream: any;
    private cache: Map<string, X509Svid[] | X509Bundle[]>;
    private middlewares: Middleware[];
    private trustDomain: string;

    constructor(spiffeClient: WorkloadClient, config?: WorkloadConfig) {
        this.middlewares = [];
        this.workloadAPIClient = spiffeClient;
        this.watcher = new EventEmitter();
        this.startWatcher();

        this.reconnectInterval = config?.reconnectInterval || 5000;
        this.cache = new Map();
        this.trustDomain = config?.trustDomain || 'server.fs.com'
    }


    addMiddleware(middleware: Middleware) {
        this.middlewares.push(middleware);
    }

    async* fetchX509Svid() {
        const request : X509SVIDRequest = {};
        try {
            for await (const message of this.workloadAPIClient.fetchX509SVID(request)) {
                yield {SVID: message};
            }
        } catch (error) {
            // Handle the error as needed
            this.logger.error(`${error}`)
        }
    }

    async* fetchX509Bundle(trustDomain: string) {
        const request: X509BundlesRequest = {};
        try {
            for await (const message of this.workloadAPIClient.fetchX509Bundles(request)) {
                const b: any = message.bundles;
                const mapKeys = Array.from(b.keys());
                const mapValues = Array.from(b.values());
                for (let i = 0; i < mapKeys.length; i++) {
                    this.logger.debug(mapKeys[i] + " : " + mapValues[i])
                }
                yield {Bundle: message};
            }
        } catch (error) {
            // Handle the error as needed
          this.logger.error(`${error}`)
        }
    }

    close() {
        this.stream.end();
        this.watcher.removeAllListeners();
    }

    private startWatcher() {

        if (this.workloadAPIClient == null) {
            setTimeout(() => this.startWatcher(), this.reconnectInterval);
            return;
        }

        this.watcher.on('update', async () => {
            this.fetchX509Svid();
            this.fetchX509Bundle(this.trustDomain);
        });

    }
}

