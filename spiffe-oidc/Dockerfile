FROM node:19.9 as build
LABEL authors="andyfurnival"

USER node
WORKDIR /home/node/app

# Copy dependency information and install all dependencies
COPY --chown=node:node package.json package-lock.json tsconfig.json ./

RUN npm install --frozen-lockfile

# Copy source code (and all other relevant files)
COPY --chown=node:node src ./src

# Build code
RUN npm run build

# Run-time stage
FROM node:19.9-alpine
LABEL spiffeId="spiffe://server.fs.com/oidc-admin"
# Set non-root user and expose port 8080
USER node
EXPOSE 3000

WORKDIR /home/node/app

# Copy dependency information and install production-only dependencies
COPY --chown=node:node package.json package-lock.json ./
COPY --chown=node:node .env ./
RUN npm install --frozen-lockfile --production

# Copy results from previous stage
COPY --chown=node:node --from=build /home/node/app/dist ./dist

ENTRYPOINT ["node", "dist/main"]