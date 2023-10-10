To regenerate the agent CSR to use x509 to join the spire server

### Generate the Agent private key
```bash 
openssl ecparam -name prime256v1 -param_enc named_curve -genkey -noout -out agent.key
```

### Generate the Agent Certificate signing request
```bash
openssl req -new -nodes -key agent.key -config ./csrconfig.txt -nameopt utf8 -utf8 -out agent.csr
```

### Sign the certificate using the Spire CA private key
```bash
openssl ca -config csr-caconfig.txt -cert server.fs.com.crt -keyfile server.fs.com.key -out agent.crt -infiles agent.csr
```
OR

### Sign the certificate using the self-signed private key 
```bash
openssl req -x509 -nodes -in agent.csr -days 365 -key server.fs.com.key -config csrconfig.txt -extensions req_ext -nameopt utf8 -utf8 -out agent.crt
```

Modify the csrconfig.txt to change any attributes for the CSR generation



## Setup stuff

### List Entries / Spiffe IDs
```bash
docker compose exec -u 501 -T spire-server bin/spire-server entry show -socketPath /run/spire/server/private/api.sock
```
### Create Admin Spiffe ID (UNIX Attestor)
```bash
docker compose exec -u 501 -T spire-server bin/spire-server entry create -spiffeID spiffe://server.fs.com/workload/admin -parentID spiffe://server.fs.com/spire/agent/x509pop/b53cef79ffc236b8015241cfd48401777c7185e7 -selector unix:uid:1000 -admin -dns localhost -dns spire-server -socketPath /run/spire/server/private/api.sock
```
### Create Admin Spiffe ID (Docker Lable Attestor)
```bash
docker compose exec -u 501 -T spire-server bin/spire-server entry create -spiffeID spiffe://server.fs.com/workload/oidc-admin -parentID spiffe://server.fs.com/spire/agent/x509pop/b53cef79ffc236b8015241cfd48401777c7185e7 -selector docker:label:com.docker.compose.service:oidc -selector unix:uid:1000 -admin -dns localhost -dns spire-server -socketPath /run/spire/server/private/api.sock
```
### Create Workload Spiffe ID
```bash
docker compose exec -u 501 -T spire-server bin/spire-server entry create -spiffeID spiffe://server.fs.com/terminal -selector unix:uid:501 -parentID spiffe://server.fs.com/spire/agent/x509pop/b53cef79ffc236b8015241cfd48401777c7185e7 -selector unix:uid:1000 -socketPath /run/spire/server/private/api.sock
```

### Fetch all x509 SVIDS
```bash
docker compose exec -u 501 -T spire-agent bin/spire-agent api fetch x509  -socketPath /run/spire/agent/public/workload_api.sock -write /run/spire/agent/public/
```
