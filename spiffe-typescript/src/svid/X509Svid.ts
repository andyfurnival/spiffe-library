import { X509Certificate } from "@peculiar/x509";
import { SpiffeId } from "../spiffeid";
import { CertificateUtils } from "../internal/CertificateUtils";
import { Logger } from '../internal/Logger';
import { Certificate, ExtKeyUsage } from "pkijs";
import { X509SVID, X509SVIDResponse } from "../proto/public/workload";
import { fromBER } from "asn1js";




export class X509Svid {

  private logger = new Logger(X509Svid)

  constructor(readonly certificate: Uint8Array, readonly privateKey: Uint8Array, readonly hint: string, readonly bundle: Uint8Array) {

  };

  public async getSpiffeId() {
      return SpiffeId.getSpiffeId(await this.getLeaf());
  }


  public async getLeaf(): Promise<X509Certificate> {

    const leafPEM = await this.getLeafAsPEM();
    if(leafPEM) {
      const x509 = await CertificateUtils.parseX509DER(leafPEM)
      if (x509)
        return new X509Certificate(x509[0].tbsView.buffer)
    }
    throw new Error("unable to get the leaf certificate from the svid")
  }

  public async getLeafAsPEM(): Promise<string | undefined> {
    // It's likely the raw certificate contains both the leaf and intermediary, with the former used for auth and the latter for digital signature/key encipherment/ key agreement

    const certResult = await this.getCertificate(Buffer.from(this.certificate).toString("base64"))
    if (certResult === undefined) throw new Error("no certificate");

    const OID =  "2.5.29.37"; // Extended Key USage

    for (let i = 0; i < certResult.length; i++) {
      const cert = certResult[i];
      const extension = cert.extensions?.find((ext: { extnID: string; }) => ext.extnID === OID);
      if (!extension) {
       continue;
      }
      const extensionValueBER = extension.extnValue.valueBlock.valueHexView;
      const asn1 = fromBER(extensionValueBER);
      const extKeyUsage = new ExtKeyUsage({ schema: asn1.result });

      const OID_ServerAuth = "1.3.6.1.5.5.7.3.1";
      const OID_ClientAuth = "1.3.6.1.5.5.7.3.2";
      for (const keyPurposeId of extKeyUsage.keyPurposes) {
        if (keyPurposeId === OID_ServerAuth || keyPurposeId === OID_ClientAuth) { // OID for serverAuth
          return this.getPEM(cert);
        }
      }
    }
    throw new Error("Unable to find leaf certificate that has an Extended Key Usage extension set")
  }

  public async getIntermediateAsPEM(): Promise<string | undefined> {
    const certResult = await this.getCertificate(Buffer.from(this.certificate).toString("base64"))
    if (certResult === undefined) throw new Error("no certificate");

    const OID =  "2.5.29.15"; //  Key Usage

    for (let i = 0; i < certResult.length; i++) {
      const cert = certResult[i];
      const extension = cert.extensions?.find((ext: { extnID: string; }) => ext.extnID === OID);
      if (!extension) {
        continue;
      }
      const bitStringValue = extension.parsedValue;
      // Convert the BitString's ArrayBuffer to a Uint8Array
      const unusedBits = bitStringValue.valueBlock.unusedBits;
      const bitArray = new Uint8Array(bitStringValue.valueBlock.valueHex);
      const padding = unusedBits; // Number of bits used for padding

      // Check the specific bits for each key usage
      // Note: The bits are in reverse order
      const digitalSignature = (bitArray[0] & 0b10000000 >>> padding) !== 0; // bit 0
      const keyEncipherment = (bitArray[0] & 0b00100000 >>> padding) !== 0; // bit 2
      const keyAgreement = (bitArray[0] & 0b00001000 >>> padding) !== 0; // bit 4

        if(digitalSignature || keyEncipherment || keyAgreement){
          return this.getPEM(cert);
        }
    }
    throw new Error("Unable to find intermediate certificate that has Key Usage extension set")
  }

  public async getBundle(): Promise<X509Certificate | undefined> {
    const pem = await this.getBundleAsPEM()
    if(pem)
      return new X509Certificate(Certificate.fromBER(Buffer.from(pem, "utf-8")).tbsView.buffer);

    throw new Error("unable to get the root certificate from the svid")

  }

  public async getBundleAsPEM(): Promise<string | undefined> {
    const root = await this.getCertificate(Buffer.from(this.bundle).toString("base64"));
    if (root === undefined) throw new Error("no root certificate");
    return this.getPEM(root[0]);
  }


  public async getKeyAsPEM(): Promise<string | undefined> {
    const key = Buffer.from(this.privateKey).toString("base64");
    return this.derToPem(key)
  }

  private arrayBufferToString(buffer: ArrayBuffer): string {
    return String.fromCharCode.apply(null, Array.from(new Uint8Array(buffer)));
  }

  private derToPem(derBase64: string): string {
    const derBuffer: Buffer = Buffer.from(derBase64, 'base64');
    const header: string = '-----BEGIN PRIVATE KEY-----';
    const footer: string = '-----END PRIVATE KEY-----';
    return [header, derBuffer.toString('base64'), footer].join('\n');
  }
  private async getCertificate(base64: string): Promise<Certificate[] | undefined> {
    return new Promise((resolve, _reject) => {
      CertificateUtils.parseX509DER(base64).then((result) => {
        resolve(result);
      });
    });
  }
  private getPEM(rootResult: Certificate) {
    const rootDER = rootResult.toSchema().toBER(false);
    const rootBuf = Buffer.from(new Uint8Array(rootDER).buffer);

    return `-----BEGIN CERTIFICATE-----\n${rootBuf.toString("base64")}\n-----END CERTIFICATE-----`;
  }


  public static async getX509Svid(x509svid: X509SVID) {

    return new X509Svid(x509svid.x509Svid, x509svid.x509SvidKey, x509svid.hint, x509svid.bundle);
  }

  public static async getX509SvidFromStream(response: X509SVIDResponse) {

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
          return new X509Svid(x509svid.x509Svid, x509svid.x509SvidKey, x509svid.hint, x509svid.bundle);
        }
      } catch (error) {
        logger.error(`${error}`)
        throw new Error("Could not get certificate from X509SVIDResponse. " + error)
      }

    }
    throw new Error("No certificates were returned from X509SVIDResponse.")
  }

}
