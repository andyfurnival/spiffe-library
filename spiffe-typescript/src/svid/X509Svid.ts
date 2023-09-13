import { X509Certificate } from "@peculiar/x509";
import { SpiffeId } from "../spiffeid";
import { CertificateUtils } from "../internal/CertificateUtils";
import { X509SVIDResponse } from "../proto/spire/workload_pb";


export class X509Svid {
        private readonly certificate: X509Certificate | undefined;
        private privateKey: Uint8Array | undefined;
        private hint: string | undefined


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

            for (const x509svid of response.getSvidsList()) {

                if (!x509svid) {
                    continue;
                }
                try {
                    const certificate = x509svid.getX509Svid_asB64();
                    const privateKey = x509svid.getX509SvidKey_asU8();
                    const hint = x509svid.getHint()
                    const x509 = await CertificateUtils.parseX509DER(certificate)


                    if (x509 !== undefined) {
                      return new X509Svid(new X509Certificate(x509[0].tbsView.buffer), privateKey, hint);
                    }
                }catch(error)
                {
                    console.log(error)
                    throw new Error("Could not get certificate from X509SVIDResponse. " + error)
                }

            }
            throw new Error("No certificates were returned from X509SVIDResponse.")
        }

    }
