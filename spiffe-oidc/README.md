
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
#Setup
Configure the .env file with details of your OKTA tenant.
OIDC_ISSUER
CLIENT_ID
CLIENT_SECRET

Create some users and assign them roles in OKTA
in .env your OKTA roles should map to roles used across workloads using ROLE_ prefix
e.g. a ROLE in OKRA called spiffe_admins should have an entry in .env called ROLE_SPIFFE_ADMIN and then map that to a local role name of your choosing
ROLE_SPIFFE_ADMINS=admin
ROLE_SPIFFE_READONLY=readonly

Make sure you have Spire Server and Agent running
Register this app as a workload in Spire with Admin rights
e.g. 
```bash
./bin/spire-server entry update -entryID "8559206a-8af6-409c-9991-7fce4e118399" -parentID "spiffe://server.fs.com/fs-agent" -selector "unix:uid:501" -dns "localost" -spiffeID "spiffe://server.fs.com/oidc-admin" -admin "true"
```
set the ADMIN_SPIFFE_ID in .env to the registered SpiffeId
## Running

Open browser to http://localhost:3000/login
Use credentials

OKTA Credentials
demo@furnival.io
d3m0spiff3

When you hit login, the SPIFFE-OIDC service will verify your OIDC Token against OKTA,
it will register your user as a SPIFFE ID in Spire, then request a JWT SVID on your behalf and return
that JWTSVID token back to your browser.

you can then use that token to call any Spiffe Service on the same trust domain that accepts a JWT SVID as authentication

See Spiffe-Workload project as an example