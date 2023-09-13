import { X509Source } from "./X509Source";
import { WorkloadConfig } from "../config";
import { WorkloadSpireClient } from "./WorkloadSpireClient";
import { X509Svid } from "../svid";
import * as fs from "fs";
import { X509SVIDResponse } from "../proto/spire/workload_pb";
import { CertificateUtils } from "../internal/CertificateUtils";

function writeFile(binary: any, spiffeId: string, filename: string, fileType: string) {

  const path = process.cwd()+"/tmp/" + spiffeId.replace("/", "_").replace(":", "").replace(".", "_")+"/";
  fs.mkdirSync(path, {recursive: true})
  fs.writeFileSync(path+filename+fileType, Buffer.from(binary));
}

function writeSVIDS(SVID: X509SVIDResponse) {
  const currentWorkingDirectory = process.cwd();

  console.log('Current working directory:', currentWorkingDirectory);

  const svids = SVID.getSvidsList();
  for (const svidsKey in svids) {
    CertificateUtils.parseX509DER(svids[svidsKey].getX509Svid_asB64()).then((cert)=>{
      if(cert !== undefined)
        writeFile(cert.toString(), svids[svidsKey].getSpiffeId(), "svid", ".pem")
    });
    CertificateUtils.parseX509DER(svids[svidsKey].getBundle_asB64()).then((cert)=>{
      if(cert !== undefined)
        writeFile(cert.toString(), svids[svidsKey].getSpiffeId(), "ca", ".pem")
    });
    writeFile(svids[svidsKey].getX509SvidKey_asB64(), svids[svidsKey].getSpiffeId(), "key", ".key");
  }

}

describe('X509Source', () => {


  it('should fetch X.509 SVID from Spire', async () => {
    const config = {
      reconnectInterval: 1000,
      spireEndpoint: "unix:///tmp/spire-agent/public/api.sock",
      trustDomain: "server.fs.com",
    } as WorkloadConfig;


    const source = new X509Source(new WorkloadSpireClient(config));
    for await (const svid of source.fetchX509Svid()) {
      expect(svid).not.toBeUndefined();
      const x509svid = await X509Svid.getX509Svid(svid.SVID)
      expect(x509svid).not.toBeUndefined();
      expect(x509svid?.getSpiffeId().getTrustDomain().toString()).toBe("server.fs.com")
      expect(x509svid?.getSpiffeId().toString()).toBe("spiffe://server.fs.com/myworkload")
      break;

    }

  });

  it('should fetch Bundles from Spire', async () => {

    const config = {
      reconnectInterval: 1000,
      spireEndpoint: "unix:///tmp/spire-agent/public/api.sock",
      trustDomain: "server.fs.com",
    } as WorkloadConfig;

    const source = new X509Source(new WorkloadSpireClient(config));

    const stream = source.fetchX509Bundle("server.fs.com");
    for await (const svid of stream) {
      expect(svid).not.toBeUndefined();
      break;
    }
  });

  it('should parse base64 certifivcater chain', async () =>{
    const b64 = "MIICEzCCAbqgAwIBAgIRAL7/w8NR28qhRz4UzyiU6yMwCgYIKoZIzj0EAwIwHjELMAkGA1UEBhMCVVMxDzANBgNVBAoTBlNQSUZGRTAeFw0yMzA5MTIwODUxMTBaFw0yMzA5MTIwOTUxMjBaMEgxCzAJBgNVBAYTAlVTMQ4wDAYDVQQKEwVTUElSRTEpMCcGA1UELRMgNjU3ZDlmOTBhNTQyOGQ1OWFhZGZjOTY1MGMwYmQzZWYwWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAAQUBcxFjX3tnbRmnQ47IJpnVedOe2/Hec5gVWA0VICTCH0hfDaCCJWSQ+GiA1WExtQvJ9JI82rcwfOXTVHBBu9bo4GuMIGrMA4GA1UdDwEB/wQEAwIDqDAdBgNVHSUEFjAUBggrBgEFBQcDAQYIKwYBBQUHAwIwDAYDVR0TAQH/BAIwADAdBgNVHQ4EFgQUdAVVuwTH2XUwNAaD4HzuU9z8G7MwHwYDVR0jBBgwFoAUGsdDRot8s8gVa/ITWh9QnueLQoYwLAYDVR0RBCUwI4Yhc3BpZmZlOi8vc2VydmVyLmZzLmNvbS9vaWRjLWFkbWluMAoGCCqGSM49BAMCA0cAMEQCIApVyY8ZmPZd8FapPZGieXizG/f9gdTuo43nQvhew9hUAiAjnMQjZvvG2fMMTeI9otbjLTxZamZVXM5TpSkRVU9CYjCCAlkwggFBoAMCAQICD2Mqgc8rC79bIQ3/Bd7MxDANBgkqhkiG9w0BAQsFADAYMRYwFAYDVQQDDA1zZXJ2ZXIuZnMuY29tMB4XDTIzMDkxMTIxMjAwMFoXDTIzMDkxMjIxMjAxMFowHjELMAkGA1UEBhMCVVMxDzANBgNVBAoTBlNQSUZGRTBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABHFjX8IvW/c/7JEpFR+gq5+cS+wnn5ujS088brwhEYc3LE+A+bpoLUAEUMPtAPZ6r9ZA9sTwXtLqajQElLJXyb2jZTBjMA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBQax0NGi3yzyBVr8hNaH1Ce54tChjAhBgNVHREEGjAYhhZzcGlmZmU6Ly9zZXJ2ZXIuZnMuY29tMA0GCSqGSIb3DQEBCwUAA4IBAQALPbq+S15bAZYHqGBs5pi0N+GTVHvNzBOSI4KWopEfHjjH8hlhRegUzXDreKleEVMXZUX2L1RZjB9VirkPDFCiK/267txeMIWxpd6Lk5R9p3XR0WmnAHvArS9wLBQbJr4vZ3zrgppUJmf6PfGqFkCh63C90pg6IYwQ9rVT8sQryg6DTlbM2cAxcyKx4HRd+SJWJiox+NgHt7nqqnBC9ZK9Nn2+k+Z/5wKYIzLzuQXIUf2PjQiFAoyDvjIgX84LOVhXuCS7mOmUPPnuwIVHp6VnTT6YlPoP7CT+xvOLZa4hOS/N4M8/gYwmk+qVHLAl/yjXcEkPSR06vPjwQvLdjwbn"
    const certs = await CertificateUtils.parseX509DER(b64)
    expect(certs).toHaveLength(2)
  })
});
