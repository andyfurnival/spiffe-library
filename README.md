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

## spiffe-demo-workload-public
A NestJS based service (workload) that authenticates against Spire using JWT SVID.  Integration into Spire is based on spiffe-typescript library

## spiffe-demo-service
A NestJS based service (workload) that is designed to be accessed by other services using mTLS issused by Spire.  Integration into Spire is based on spiffe-typescript library


## Notes
To communicate to the agent sock, both the caller and agent must be in the same group or share the same userid

For the agent to communicate to the docker socket, it must run as a root user (0:0) and maybe run privileged

**Further setup specifics** \
[Infrastructure](spire/README.md) \
[Demo API based Service](spiffe-demo-service/README.md) \
[Demo user based Service](spiffe-demo-workload-public/README.md) \
[OIDC based Interface between OKTA and SPIFFE](spiffe-oidc/README.md) \
[TypeScript SDK for Spiffe](spiffe-typescript/README.md) 

## Diagrams

### C1
```mermaid
graph LR
  linkStyle default fill:#ffffff

  subgraph diagram [System Landscape]
    style diagram fill:#ffffff,stroke:#ffffff

    1["<div style='font-weight: bold'>User</div><div style='font-size: 70%; margin-top: 0px'>[Person]</div>"]
    style 1 fill:#08427b,stroke:#052e56,color:#ffffff
    2("<div style='font-weight: bold'>OKTA</div><div style='font-size: 70%; margin-top: 0px'>[Software System]</div>")
    style 2 fill:#1168bd,stroke:#0b4884,color:#ffffff
    5("<div style='font-weight: bold'>FI</div><div style='font-size: 70%; margin-top: 0px'>[Software System]</div>")
    style 5 fill:#1168bd,stroke:#0b4884,color:#ffffff

    1-. "<div>(1) Passes authenticated OKTA<br />JWT (TLS)</div><div style='font-size: 70%'></div>" .->5
    5-. "<div>SPIFFE JWT SVID</div><div style='font-size: 70%'></div>" .->1
    1-. "<div>Authenticates</div><div style='font-size: 70%'></div>" .->2
    2-. "<div>OKTA JWT</div><div style='font-size: 70%'></div>" .->1
  end
```
### C2
```mermaid
graph LR
  linkStyle default fill:#ffffff

  subgraph diagram [FI - Containers]
    style diagram fill:#ffffff,stroke:#ffffff

    1["<div style='font-weight: bold'>User</div><div style='font-size: 70%; margin-top: 0px'>[Person]</div>"]
    style 1 fill:#08427b,stroke:#052e56,color:#ffffff

    subgraph 5 [FI]
      style 5 fill:#ffffff,stroke:#0b4884,color:#0b4884

      17("<div style='font-weight: bold'>Demo User API</div><div style='font-size: 70%; margin-top: 0px'>[Container]</div>")
      style 17 fill:#438dd5,stroke:#2e6295,color:#ffffff
      21("<div style='font-weight: bold'>Demo Service API</div><div style='font-size: 70%; margin-top: 0px'>[Container]</div>")
      style 21 fill:#438dd5,stroke:#2e6295,color:#ffffff
      6("<div style='font-weight: bold'>Spire Server</div><div style='font-size: 70%; margin-top: 0px'>[Container]</div>")
      style 6 fill:#438dd5,stroke:#2e6295,color:#ffffff
      7("<div style='font-weight: bold'>Spire Agent</div><div style='font-size: 70%; margin-top: 0px'>[Container]</div>")
      style 7 fill:#438dd5,stroke:#2e6295,color:#ffffff
      9("<div style='font-weight: bold'>OIDC</div><div style='font-size: 70%; margin-top: 0px'>[Container]</div>")
      style 9 fill:#438dd5,stroke:#2e6295,color:#ffffff
    end

    7-. "<div>push x509 identity</div><div style='font-size: 70%'></div>" .->9
    1-. "<div>(1) Passes authenticated OKTA<br />JWT (TLS)</div><div style='font-size: 70%'></div>" .->9
    9-. "<div>(2) Creates Spiffe Entry for<br />OKTA user (mTLS)</div><div style='font-size: 70%'></div>" .->6
    9-. "<div>(3) Gets JWT SVID for OKTA<br />user (UDS)</div><div style='font-size: 70%'></div>" .->7
    9-. "<div>SPIFFE JWT SVID</div><div style='font-size: 70%'></div>" .->1
    1-. "<div>Passes JWT SVID (TLS)</div><div style='font-size: 70%'></div>" .->17
    17-. "<div>validates JWT SVID (UDS)</div><div style='font-size: 70%'></div>" .->7
    7-. "<div>push x509 identity (UDS)</div><div style='font-size: 70%'></div>" .->17
    7-. "<div>push x509 identity (UDS)'</div><div style='font-size: 70%'></div>" .->21
    17-. "<div>mTLS using x509 SVID</div><div style='font-size: 70%'></div>" .->21
    7-. "<div>Mints JWT/X509 SVID</div><div style='font-size: 70%'></div>" .->6
  end
```