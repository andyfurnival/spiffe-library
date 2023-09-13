import { X509Source } from "./X509Source";
import { X509Svid } from "../svid";
import { WorkloadMockClient } from "./WorkloadMockClient";

describe('X509Source', () => {
it('should fetch X.509 SVID from Mock Spire', async () => {

     const source = new X509Source(new WorkloadMockClient());
      const stream = source.fetchX509Svid();
      for await (const svid of stream) {
          expect(svid).not.toBeUndefined();
          const x509svid = await X509Svid.getX509Svid(svid.SVID)
          expect(x509svid).not.toBeUndefined();
          expect(x509svid?.getSpiffeId().getTrustDomain().toString()).toBe("server.fs.com")
          expect(x509svid?.getSpiffeId().toString()).toBe("spiffe://server.fs.com/workload")
      }
  });

    it('should fetch Bundles from Mock Spire', async () => {

        const source = new X509Source(new WorkloadMockClient());
        const stream = source.fetchX509Bundle("server.fs.com");
        for await (const svid of stream) {
            expect(svid).not.toBeUndefined();

        }
    });

});

