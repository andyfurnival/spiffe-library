FROM docker:latest
LABEL authors="andyfurnival"
RUN apk update && apk --no-cache --update add dumb-init openssl gcompat

COPY --from=ghcr.io/spiffe/spire-agent:1.8.0 /opt/spire/bin/spire-agent /opt/spire/bin/
COPY --from=ghcr.io/spiffe/spire-server:1.8.0 /opt/spire/bin/spire-server /usr/local/bin/

ENTRYPOINT ["/opt/spire/bin/spire-agent", "run"]