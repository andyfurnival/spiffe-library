import { WorkloadConfig } from "../config";
import { WorkloadSpireClient } from "./WorkloadSpireClient";
import { JwtSource } from "./JWTSource";
import jwt from "jsonwebtoken";
import { JwtSvid } from "../svid";

describe('X509Source', () => {


    async function  getJwt(spiffeId: string, ...audience: string[]){
      const config = {
        reconnectInterval: 1000,
        spireEndpoint: "unix:///tmp/spire-agent/public/api.sock",
        trustDomain: "server.fs.com",
      } as WorkloadConfig;

        const source = new JwtSource(new WorkloadSpireClient(config));
        const svid = await source.fetchJwtSvid(spiffeId, ...audience)
        return svid.JWT;
    }
    it('should fetch JWT SVID from Spire', async () => {
        const audience = ["spiffe://server.fs.com/myworkload2", "spiffe://server.fs.com/myworkload3"];

        const jwtsvid = await getJwt("spiffe://server.fs.com/myworkload", ...audience)
        for (const jwtsvidKey in jwtsvid) {
            expect(jwtsvidKey).not.toBeUndefined();
            expect(jwtsvid[jwtsvidKey].getSpiffeId()).toBe("spiffe://server.fs.com/myworkload")
            const decodedJwt : any = jwt.decode(jwtsvid[jwtsvidKey].getSvid())
            expect(decodedJwt?.sub).toBe("spiffe://server.fs.com/myworkload")
            expect(decodedJwt?.aud).toStrictEqual(audience)
        }


    });

    it('should fetch JWT SVID from Spire for other workloads', async () => {
        const audience = ["spiffe://server.fs.com/myworkload", "spiffe://server.fs.com/myworkload3"];

        const jwtsvid = await getJwt("spiffe://server.fs.com/myworkload2", ...audience)
        for (const jwtsvidKey in jwtsvid) {
            expect(jwtsvidKey).not.toBeUndefined();
            expect(jwtsvid[jwtsvidKey].getSpiffeId()).toBe("spiffe://server.fs.com/myworkload2")
            const decodedJwt : any = jwt.decode(jwtsvid[jwtsvidKey].getSvid())
            expect(decodedJwt?.sub).toBe("spiffe://server.fs.com/myworkload2")
            expect(decodedJwt?.aud).toStrictEqual(audience)
        }


    });
    it('should fetch JWT Bundles from Spire', async () => {
      const config = {
        reconnectInterval: 1000,
        spireEndpoint: "unix:///tmp/spire-agent/public/api.sock",
        trustDomain: "server.fs.com",
      } as WorkloadConfig;
        const source = new JwtSource(new WorkloadSpireClient(config));
        const stream = source.fetchJwtBundle("server.fs.com");
        for await (const svid of stream) {
            expect(svid).not.toBeUndefined();
            const b: any = svid.Bundles;
            const mapKeys = Array.from(b.keys());

            for (let i = 0; i < mapKeys.length; i++) {
                expect(mapKeys[0]).toBe("spiffe://server.fs.com")
            }
            break;
        }
    });

    it('should validate a JWT SVIT against Spire', async () => {

      const config = {
        reconnectInterval: 1000,
        spireEndpoint: "unix:///tmp/spire-agent/public/api.sock",
        trustDomain: "server.fs.com",
      } as WorkloadConfig;

      const audience = "spiffe://server.fs.com/myworkload3";
        const jwtsvid = await getJwt("spiffe://server.fs.com/myworkload", ...[audience])

        const source = new JwtSource(new WorkloadSpireClient(config));
        const validation = await source.validateJWTSvid(jwtsvid[0].getSvid(), audience);
        expect(validation.JWT.hasClaims()).toBeTruthy()
        console.log(validation.JWT.getClaims())
        expect(validation.JWT.getSpiffeId()).toBe("spiffe://server.fs.com/myworkload")

    });

    it('should parse a JWT', async () =>{
      const jwt = "eyJhbGciOiJFUzI1NiIsImtpZCI6InR5SXBVWkpmanBtaWRLMGI5Tm1NY01XSEFoNnk2NjdiIiwidHlwIjoiSldUIn0.eyJhdWQiOlsic3BpZmZlOi8vc2VydmVyLmZzLmNvbSJdLCJleHAiOjE2OTQ1NTAyOTQsImlhdCI6MTY5NDU0OTk5NCwic3ViIjoic3BpZmZlOi8vc2VydmVyLmZzLmNvbS91c2VyL3JvbGVzX2FkbWluLnB1YmxpYyJ9.XcNRQcY9z952mQ2vHbqwqXFw_qJhUiK_HK2rXxAaKOPNuU28JG0Zdltl_S1DC3CW5agvx9tJkU5jtCDGpSt3lA"
      const svid = new JwtSvid(jwt)
      expect(svid.getSubject()).toBeDefined()
    })
});

