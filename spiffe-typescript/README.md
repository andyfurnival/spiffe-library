# Spiffe-TypeScript
Secure Production Identity Framework for Everyone

## Setup
### Setup Spire Server 
* Download Spire from [Spiffe.io](https://spiffe.io/downloads)
* Follow the instructions on the website to run a Spire Server & Agent on your machine, but for a quick start
  * open the root of the directory your spire folder in a window
  * in another window, copy the conf files from SpireConfig from this repo over to the conf/server and conf/agent folders
  * find the Spire Root CA (crt and key files) that was created for server.fs.com trust domain in the SpireConfig folder , copy that to conf/server in the Spire folder
* Now run the following commands (only tested this on MacOS)
```shell
./bin/spire-server run -config conf/server/server.conf && \
token=$(echo ./bin/spire-server token generate -spiffeID spiffe://server.fs.com/myagent | grep -o -E '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}') && \
./bin/spire-agent run -config conf/agent/agent.conf -joinToken "$token" && \
./bin/spire-server entry create -parentID spiffe://server.fs.com/myagent -spiffeID spiffe://server.fs.com/myworkload -selector unix:uid:501 && \
./bin/spire-server entry create -parentID spiffe://server.fs.com/myagent -spiffeID spiffe://server.fs.com/myworkload2 -selector unix:uid:501 &
```

This will start Spire server for server.fs.com trust domain, get a join token for your agent to connect, start the agent with the join token, register this workload (the integrated tests to run as the workload)
You will see logs in your terminal from the spire agent and server, if the tests fail, it could be your unix socket or attestation of the unit test process uid:501. You'll have to read the Spiffe.io website to get help

## What does it do
The goal here is to provide a simple means to:
1. Initiate mTLS connections using this workload's SVID that has been requested from the Spire Agent 
2. Get x509 bundles that allow this workload to verify the remote service's SVID is valid and can be trusted (during handshake)
2. Get a JWT using this workload's SVID that has been requested from the Spire Agent to call a service that can't use mTLS
3. Validate a JWT from a caller service, so this workload can attest the caller has the right claims to use this workload

## What's it intended for
This project is intended to be a library to abstract the complexity of working with Spiffe, so we can implement simple queries into any chosen framework, to authenticate and validate all callers into the workload protected by Spiffe

## How to run
clone the source code\
Pull all the dependencies\
```npm install```\
Build the classes for Protobuf\
```npm run genproto```\
Run all tests\
```npm run test```\
Run unit tests\
```npm run test:unit```\
Run integration tests\
```npm run test:integration```
