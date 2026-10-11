FROM mcr.microsoft.com/devcontainers/typescript-node:1-22-bookworm

USER root

RUN apt-get update \
  && apt-get install -y --no-install-recommends libnspr4 \
  && rm -rf /var/lib/apt/lists/*

USER node
