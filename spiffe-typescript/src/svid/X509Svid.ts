import { X509Certificate } from "@peculiar/x509";
import { SpiffeId } from "../spiffeid";
import { CertificateUtils } from "../internal/CertificateUtils";
import { X509SVIDResponse } from "../proto/public/workload";
import { Logger } from '../internal/Logger';

export class X509Svid {
        private readonly certificate: X509Certificate | undefined;
        private privateKey: Uint8Array | undefined;
        private hint: string | undefined
        private logger = new Logger(X509Svid)

        constructor(certificate?: X509Certificate, privateKey?: Uint8Array, hint?: string) {
            this.certificate = certificate;
            this.privateKey = privateKey;
            this.hint = hint;
        };

        public getSpiffeId() {
            return SpiffeId.getSpiffeId(this.certificate);
        }

        public getLeaf(): X509Certificate | undefined {
            return this.certificate;
        }


        public static async getX509Svid(response: X509SVIDResponse) {

          const logger = new Logger(X509Svid)
            for (const x509svid of response.svids) {

                if (!x509svid) {
                    continue;
                }
                try {
                    const certificate = Buffer.from(x509svid.x509Svid).toString("base64");
                    const privateKey = x509svid.x509SvidKey;
                    const hint = x509svid.hint
                    const x509 = await CertificateUtils.parseX509DER(certificate)


                    if (x509 !== undefined) {
                      return new X509Svid(new X509Certificate(x509[0].tbsView.buffer), privateKey, hint);
                    }
                }catch(error)
                {
                    logger.error(`${error}`)
                    throw new Error("Could not get certificate from X509SVIDResponse. " + error)
                }

            }
            throw new Error("No certificates were returned from X509SVIDResponse.")
        }

    }
