
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
### Build the container
```bash
docker build -t fs/spiffe-oidc .
```

### Setup
Configure the .env file with details of your OKTA tenant.
SPIFFE_ID=spiffe://server.fs.com/workload/demo-service
WORKLOAD_ENDPOINT=unix:///tmp/spire-agent/public/api.sock
WORKLOAD_RECONNECT_INTERVAL=1000


Make sure you have Spire Server and Agent running
Register this app as a workload in Spire with Admin rights
e.g. 
```bash
./bin/spire-server entry create -parentID "spiffe://server.fs.com/spire/agent/x509pop/b53cef79ffc236b8015241cfd48401777c7185e7" -selector "docker:spiffe_id:spiffe://server.fs.com/workload/demo-service" -dns "workload-demo-service" -spiffeID "spiffe://server.fs.com/workload/demo-service" 
```

## Running

Open browser to http://localhost:3000/login
Use credentials associated with the OKTA account

OKTA Credentials
demo@furnival.io
d3m0spiff3

When you hit login, the SPIFFE-OIDC service will verify your OIDC Token against OKTA,
it will register your user as a SPIFFE ID in Spire, then request a JWT SVID on your behalf and return
that JWTSVID token back to your browser.

you can then use that token to call any Spiffe Service on the same trust domain that accepts a JWT SVID as authentication

See spiffe-demo-workload-public project as an example