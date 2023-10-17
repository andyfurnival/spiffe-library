
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

## About

### Build the container
```bash
docker build -t fs/workload-public .
```

Register the workload in Spire
#### Local
```bash
./bin/spire-server entry create -parentID "spiffe://server.fs.com/spire/agent/x509pop/b53cef79ffc236b8015241cfd48401777c7185e7" -selector "docker:spiffe_id:spiffe://server.fs.com/workload/demo-public" -dns "demo-service" -spiffeID "spiffe://server.fs.com/workload/demo-public" 
```
#### Docker
```bash
docker compose exec -u 501 -T spire-server bin/spire-server entry create -parentID "spiffe://server.fs.com/spire/agent/x509pop/b53cef79ffc236b8015241cfd48401777c7185e7" -selector "docker:spiffe_id:spiffe://server.fs.com/workload/demo-public" -dns "demo-service" -spiffeID "spiffe://server.fs.com/workload/demo-public"  -socketPath /run/spire/server/private/api.sock
```
This app is an end-user based app, that is designed to be called from browser based requests

The purpose is to demonstrate:
- end-user authentication using JWTSvid (Spiffe)
- service to service usinig mTLS passing end-user provided JWT

