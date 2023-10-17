
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

Build the container
```bash
docker build -t fs/demo-service .
```
## About

Register the workload in Spire
#### Local
```bash
./bin/spire-server entry create -parentID "spiffe://server.fs.com/spire/agent/x509pop/b53cef79ffc236b8015241cfd48401777c7185e7" -selector "docker:spiffe_id:spiffe://server.fs.com/workload/demo-service" -dns "demo-service" -spiffeID "spiffe://server.fs.com/workload/demo-service" 
```
#### Docker
```bash
docker compose exec -u 501 -T spire-server bin/spire-server entry create -parentID "spiffe://server.fs.com/spire/agent/x509pop/b53cef79ffc236b8015241cfd48401777c7185e7" -selector "docker:spiffe_id:spiffe://server.fs.com/workload/demo-service" -dns "demo-service" -spiffeID "spiffe://server.fs.com/workload/demo-service"  -socketPath /run/spire/server/private/api.sock
```
This app is a service based app, that is designed to be called from other services, not from end-users.

The purpose is to demonstrate:
- service to service using mTLS
- service to service usinig mTLS with top end-user provided JWT
- mTLS termination using Envoy