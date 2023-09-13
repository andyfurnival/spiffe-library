# spiffe

This is a TypeScript library for interacting with Spire using the SPIFFE framework. More details here https://spiffe.io

There are 3 projects,

## spiffe-typescript 
A package library that can be imported into TypeScript projects
Supported Spire APIs

WorkloadAPI (Spire Agent Public APIs)
- FetchX509SVID
- FetchX509Bundles
- FetchJWTSVID
- FetchJWTBundles
- ValidateJWTSVID

Entry (Spire Server Admin APIs)
- BatchCreateEntry

DelegatedIdentity (Spire Agent Admin APIs)
- FetchJWTSVIDs


## spiffe-oidc
A NestJS based service (workload) that integrates into an OKTA IdP for user authentication, which can create Spire Users (SpiffeId) and issue Spire JWTs to use against other services (workloads). Integration into Spire is based on spiffe-typescript library

## spiffe-workload
A NestJS based service (workload) that authenticates against Spire using JWT SVID.  Integration into Spire is based on spiffe-typescript library
