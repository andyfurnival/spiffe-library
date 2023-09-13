import { Crypto } from "@peculiar/webcrypto";
import * as x509 from "@peculiar/x509";
import {
  BasicConstraintsExtension,
  ExtendedKeyUsage,
  KeyUsageFlags,
  Name,
  X509CertificateGenerator
} from "@peculiar/x509";
import * as forge from "node-forge";
import { Certificate } from "pkijs";

const crypto = new Crypto();
x509.cryptoProvider.set(crypto);


export class CertificateUtils {


// Get the Not Before Date for a Certificate (will be valid from 2 days ago)
  static getCertNotBefore() {
    const twoDaysAgo = new Date(Date.now() - 60 * 60 * 24 * 2 * 1000);
    const year = twoDaysAgo.getFullYear();
    const month = (twoDaysAgo.getMonth() + 1).toString().padStart(2, "0");
    const day = twoDaysAgo.getDate();
    return new Date(`${year}-${month}-${day} 00:00:00Z`);
  }

// Get Certificate Expiration Date (Valid for 90 Days)
  static getCertNotAfter(notBefore: Date) {
    const ninetyDaysLater = new Date(notBefore.getTime() + 60 * 60 * 24 * 90 * 1000);
    const year = ninetyDaysLater.getFullYear();
    const month = (ninetyDaysLater.getMonth() + 1).toString().padStart(2, "0");
    const day = ninetyDaysLater.getDate();
    return new Date(`${year}-${month}-${day} 23:59:59Z`);
  }

// Get CA Expiration Date (Valid for 100 Years)
  static getCANotAfter(notBefore: Date) {
    const year = notBefore.getFullYear() + 100;
    const month = (notBefore.getMonth() + 1).toString().padStart(2, "0");
    const day = notBefore.getDate();
    return new Date(`${year}-${month}-${day} 23:59:59Z`);
  }

  static makeNumberPositive(hexString: string) {
    let mostSignificativeHexDigitAsInt = parseInt(hexString[0], 16);

    if (mostSignificativeHexDigitAsInt < 8) return hexString;

    mostSignificativeHexDigitAsInt -= 8;
    return mostSignificativeHexDigitAsInt.toString() + hexString.substring(1);
  }

  static randomSerialNumber() {
    const randomBuffer = crypto.getRandomValues(new Uint8Array(20));
    return Buffer.from(randomBuffer).toString("hex");
  }

  public static extractBase64FromPEM(pem: string): string[] {
    const base64Strings = [];
    const lines = pem.split("\n");
    let currentBase64 = "";

    for (const line of lines) {
      if (line.startsWith("-----BEGIN")) {
        currentBase64 = "";
      } else if (line.startsWith("-----END")) {
        base64Strings.push(currentBase64);
      } else {
        currentBase64 += line.trim();
      }
    }
    return base64Strings;
  }


  public static async parseX509DER(x509svid: string) {
    try {
      const certificates: Certificate[] = [];
      const binaryData = Buffer.from(x509svid, "base64");

      const asn = binaryData.toString("hex");
      const parts = asn.split("308202");
      for (let i = 0; i < parts.length; i++) {

        if (parts[i] === "") continue;
        const certificateBytes = "308202" + parts[i];
        forge.util.hexToBytes(certificateBytes);
        const certificate = Certificate.fromBER(Buffer.from(forge.util.hexToBytes(certificateBytes), "binary"));
        certificates.push(certificate);

      }
      return certificates;
    } catch (error) {
      console.log("Failed to parse ASN.1 DER encoded X509. " + error);
      return undefined;
    }
  }


  public static async createRootCA(spiffeId: string) {

    const keyPair = await crypto.subtle.generateKey(
      {
        name: "RSASSA-PKCS1-v1_5",
        modulusLength: 2048,
        publicExponent: new Uint8Array([0x01, 0x00, 0x01]), // 65537
        hash: { name: "SHA-256" }
      },
      true,
      ["sign", "verify"]
    );

    const rootCACertificate = await X509CertificateGenerator.createSelfSigned({
      keys: keyPair,
      notAfter: this.getCANotAfter(new Date()),
      notBefore: this.getCertNotBefore(),
      signingAlgorithm: undefined,
      serialNumber: "01",
      name: new Name("O=Spiffe RootCA"),
      extensions: [
        new BasicConstraintsExtension(true, 2, true),
        new x509.KeyUsagesExtension(KeyUsageFlags.keyCertSign, true),
        new x509.SubjectAlternativeNameExtension([
          { type: "url", value: spiffeId }
        ])
      ]
    });


    return {
      certificate: rootCACertificate,
      publicKey: keyPair.publicKey,
      privateKey: keyPair.privateKey,
      notBefore: rootCACertificate.notBefore,
      notAfter: rootCACertificate.notAfter
    };
  }

  public static async createCertificate(name: string, spiffeId: string, caCert: any, caPrivateKey: any) {

    const keyPair = await this.generateKeyPair();


    const alg = {
      name: "RSASSA-PKCS1-v1_5",
      hash: "SHA-256",
      modulusLength: 2048,
      publicExponent: new Uint8Array([1, 0, 1])
    };


    const cert = await X509CertificateGenerator.create({
      subject: new Name(name),
      issuer: caCert.issuer,
      signingAlgorithm: alg,
      serialNumber: CertificateUtils.randomSerialNumber(),
      notBefore: CertificateUtils.getCertNotBefore(),
      notAfter: CertificateUtils.getCertNotAfter(CertificateUtils.getCertNotBefore()), // 1 year validity
      extensions: [

        new x509.SubjectAlternativeNameExtension([
          { type: "url", value: spiffeId }
        ]),
        new x509.ExtendedKeyUsageExtension([ExtendedKeyUsage.serverAuth, ExtendedKeyUsage.clientAuth], true),
        new x509.KeyUsagesExtension(KeyUsageFlags.digitalSignature | KeyUsageFlags.keyEncipherment | KeyUsageFlags.keyAgreement, true)

      ],
      publicKey: keyPair.publicKey,
      signingKey: caPrivateKey

    });

    return {
      certificate: cert,
      publicKey: keyPair.publicKey,
      privateKey: keyPair.privateKey,
      notBefore: cert.notBefore,
      notAfter: cert.notAfter
    };

  }

  private static async generateKeyPair(): Promise<any> {
    return await crypto.subtle.generateKey(
      {
        name: "RSASSA-PKCS1-v1_5",
        hash: "SHA-256",
        modulusLength: 2048,
        publicExponent: new Uint8Array([1, 0, 1])
        // namedCurve: "P-256",
      },
      true,
      ["sign", "verify"]
    );
  }

}
