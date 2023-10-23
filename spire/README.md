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



## Setup stuff - Docker
the Unix Domain Sockets have inconsistent permissions, the workload API looks to be 777, but the admin apis are not and may need to be modified to 777 once the containers are running
```bash
sudo chmod 777 /tmp/spire-agent-private/admin_api.sock
sudo chmod 777 /tmp/spire-server-private/api.sock
```

### List Agents / Spiffe IDs
```bash
docker compose exec -u 501 -T spire-server bin/spire-server agent list -socketPath /run/spire/server/private/api.sock
```

### List Entries / Spiffe IDs
```bash
docker compose exec -u 501 -T spire-server bin/spire-server entry show -socketPath /run/spire/server/private/api.sock
```

### Create Admin Spiffe ID 
```bash
docker compose exec -u 501 -T spire-server bin/spire-server entry create -spiffeID spiffe://server.fs.com/workload/oidc-admin -parentID spiffe://server.fs.com/spire/agent/x509pop/b53cef79ffc236b8015241cfd48401777c7185e7 -selector docker:label:spiffe_id:spiffe://server.fs.com/workload/oidc-admin  -admin -dns localhost -dns spire-server -socketPath /run/spire/server/private/api.sock
```

### Create Demo Service Spiffe ID (for service to service) 
```bash
docker compose exec -u 501 -T spire-server bin/spire-server entry create -spiffeID spiffe://server.fs.com/workload/demo-service -parentID spiffe://server.fs.com/spire/agent/x509pop/b53cef79ffc236b8015241cfd48401777c7185e7 -selector docker:label:spiffe_id:spiffe://server.fs.com/workload/demo-service -dns demo-service -socketPath /run/spire/server/private/api.sock
```
### Create Demo Public Spiffe ID (for end users)
```bash
docker compose exec -u 501 -T spire-server bin/spire-server entry create -spiffeID spiffe://server.fs.com/workload/demo-public -parentID spiffe://server.fs.com/spire/agent/x509pop/b53cef79ffc236b8015241cfd48401777c7185e7 -selector docker:label:spiffe_id:spiffe://server.fs.com/workload/demo-public -dns demo-public -socketPath /run/spire/server/private/api.sock
```


Others
### Create Terminal Identity
```bash
docker compose exec -u 501 -T spire-server bin/spire-server entry create -spiffeID spiffe://server.fs.com/terminal -selector unix:uid:501 -parentID spiffe://server.fs.com/spire/agent/x509pop/b53cef79ffc236b8015241cfd48401777c7185e7 -socketPath /run/spire/server/private/api.sock
```


### Fetch all x509 SVIDS
```bash
docker compose exec -u 501 -T spire-agent bin/spire-agent api fetch x509  -socketPath /run/spire/agent/public/workload_api.sock -write /run/spire/agent/conf/ca
```

## Setup stuff - Local

### Create Admin Spiffe ID
```bash
 ./bin-macos/spire-server entry create -spiffeID spiffe://server.fs.com/workload/oidc-admin -parentID spiffe://server.fs.com/spire/agent/x509pop/b53cef79ffc236b8015241cfd48401777c7185e7 -selector unix:uid:501  -admin -dns localhost -dns spire-server -socketPath  /tmp/spire/server/private/api.sock
```
### Create Demo Service Spiffe ID (for service to service)
```bash
./bin-macos/spire-server entry create -spiffeID spiffe://server.fs.com/workload/demo-service -parentID spiffe://server.fs.com/spire/agent/x509pop/b53cef79ffc236b8015241cfd48401777c7185e7 -selector unix:uid:501 -dns demo-service -socketPath /tmp/spire/server/private/api.sock
```
### Create Demo Public Spiffe ID (for end users)
```bash
./bin-macos/spire-server entry create -spiffeID spiffe://server.fs.com/workload/demo-public -parentID spiffe://server.fs.com/spire/agent/x509pop/b53cef79ffc236b8015241cfd48401777c7185e7 -selector unix:uid:501 -dns demo-public -socketPath /tmp/spire/server/private/api.sock
```