import { CertificateUtils } from "./CertificateUtils";

import { SpiffeId, TrustDomain } from "../spiffeid";

import { Name } from "@peculiar/x509";

describe('CertificateUtils', () => {

  it('Creates a valid CA root', async () => {
    const {certificate} = await CertificateUtils.createRootCA("spiffe://server.fs.com")
    const subject = new Name(certificate.subject);
    const commonName = subject.getField("2.5.4.10")[0];
    expect(commonName).toBe("Spiffe RootCA")
    expect(SpiffeId.getSpiffeId(certificate).toString()).toBe("spiffe://server.fs.com")
  })

  it('Create a valid Certificate issued from the CA',async () =>{
    const ca = await CertificateUtils.createRootCA("spiffe://server.fs.com")

    const leaf = await CertificateUtils.createCertificate("O=Demo Org", "spiffe://server.fs.com", ca.certificate, ca.privateKey)

    // Extract the CommonName from the issuer field
    const issuerName = new Name(leaf.certificate.issuer);
    const commonName = issuerName.getField("2.5.4.10")[0];


    expect(SpiffeId.getSpiffeId(leaf.certificate).toString()).toBe("spiffe://server.fs.com")
    expect(commonName).toBe("Spiffe RootCA")
    expect(ca.certificate.verify(leaf.certificate)).toBeTruthy();
  })

  it('Certificate has a valid spiffeId', async () =>{
    const rootCA = await CertificateUtils.createRootCA("spiffe://server.fs.com")
    const leaf = await CertificateUtils.createCertificate("Demo Org", "spiffe://server.fs.com/workload", rootCA.certificate, rootCA.privateKey)

    const spiffeId = SpiffeId.getSpiffeId(leaf.certificate);
    expect(spiffeId.toString()).toBe("spiffe://server.fs.com/workload")
  })

  it ('TrustDomain can be extracted from Certificate', async () =>{
    const rootCA = await CertificateUtils.createRootCA("spiffe://server.fs.com")
    const intermediate = await CertificateUtils.createCertificate("Demo Org", "spiffe://server.fs.com/host", rootCA.certificate, rootCA.privateKey)
    const leaf = await CertificateUtils.createCertificate("Demo Org", "spiffe://server.fs.com/workload", intermediate.certificate, intermediate.privateKey)

    const intermediateCert = intermediate.certificate;
    const leafCert = leaf.certificate;
    const chain = Array.of(leafCert, intermediateCert)

    const trustDomain = SpiffeId.getTrustDomain(chain)
    expect(trustDomain).not.toBeNull()
    expect(TrustDomain.parse("server.fs.com")).toStrictEqual(trustDomain)
  })
});
