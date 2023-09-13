import {
  JWTBundlesRequest,
  JWTBundlesResponse,
  JWTSVIDRequest,
  JWTSVIDResponse,
  ValidateJWTSVIDRequest,
  ValidateJWTSVIDResponse,
  X509BundlesRequest,
  X509BundlesResponse,
  X509SVID,
  X509SVIDRequest,
  X509SVIDResponse
} from "../proto/spire/workload_pb";
import { CertificateUtils } from "../internal/CertificateUtils";
import { WorkloadClient } from "./WorkloadClient";
import { PemConverter, X509Certificate, X509Certificates, X509ChainBuilder } from "@peculiar/x509";
import { Crypto } from "@peculiar/webcrypto";

async function generateSvid(trustDomain : string = 'server.fs.com') {

    const ca = await CertificateUtils.createRootCA(`spiffe://${trustDomain}`)
    const leafCer = await CertificateUtils.createCertificate("Demo Org", `spiffe://${trustDomain}/workload`, ca.certificate, ca.privateKey)
    const chain = new X509ChainBuilder({
        certificates: [
            ca.certificate
        ],
    });
    const items = await chain.build(leafCer.certificate);

    const crypto = new Crypto();

    const exportedPrivateKey = await crypto.subtle.exportKey("pkcs8", leafCer.privateKey);
    const pemPrivateKey = PemConverter.encode(exportedPrivateKey, "PRIVATE KEY");

    const exportedPublicKey = await crypto.subtle.exportKey("spki", leafCer.publicKey);
    const pemPublicKey = PemConverter.encode(exportedPublicKey, "PUBLIC KEY");
    const pemCA = PemConverter.encode(X509Certificate.toArrayBuffer(ca.certificate.rawData), "CERTIFICATE");
    const pemCABundle = PemConverter.encode(X509Certificate.toArrayBuffer(items.export("raw")), "CERTIFICATE");

    const leafCert = PemConverter.encode(X509Certificate.toArrayBuffer(leafCer.certificate.rawData), "CERTIFICATE");
    const certs = new X509Certificates([
        ca.certificate,
    ]);


    const bundle = new Uint8Array(Buffer.from(certs.export()));
    const privateKey = new Uint8Array(Buffer.from(pemPrivateKey))

    const leafDER = CertificateUtils.extractBase64FromPEM(leafCert)
    const derArrayBuffer = Buffer.from(leafDER[0], 'base64')


    const svid = new X509SVID();
    svid.setSpiffeId(`spiffe://${trustDomain}/workload`);
    svid.setX509Svid(new Uint8Array(derArrayBuffer));
    svid.setX509SvidKey(privateKey);
    svid.setBundle(bundle);

    return svid
}



export class WorkloadMockClient implements WorkloadClient {


    // Mock implementation of the fetchX509SVID method
    async *fetchX509SVID(request: X509SVIDRequest) {

            const response = new X509SVIDResponse();
            response.addSvids(await generateSvid());
            yield response;

    }
    async *fetchX509Bundles(request: X509BundlesRequest){

            const response = new X509BundlesResponse();
            yield response;

    }

    fetchJWTSVID(request: JWTSVIDRequest): Promise<JWTSVIDResponse> {
        return new Promise((resolve, _reject) => {
            const response = new JWTSVIDResponse();

            resolve(response);
        });
    }

    async *fetchJWTBundles(request: JWTBundlesRequest) {

            const response = new JWTBundlesResponse();
            yield response;

    }

    validateJWTSVID(request: ValidateJWTSVIDRequest): Promise<ValidateJWTSVIDResponse> {
        return new Promise((resolve, _reject) => {
            const response = new ValidateJWTSVIDResponse();

            resolve(response);
        });
    }
}


