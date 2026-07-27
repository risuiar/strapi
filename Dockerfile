FROM node:22-bookworm-slim AS build

WORKDIR /app

RUN apt-get update \
  && apt-get install -y --no-install-recommends build-essential python3 libvips-dev \
  && rm -rf /var/lib/apt/lists/*

COPY package.json yarn.lock ./
RUN yarn config set network-timeout 600000 -g \
  && yarn install --frozen-lockfile

COPY config ./config
COPY database ./database
COPY public ./public
COPY src ./src
COPY favicon.png jsconfig.json ./

ARG URL
ARG STRAPI_ADMIN_BACKEND_URL
ENV NODE_ENV=production
ENV URL=${URL}
ENV STRAPI_ADMIN_BACKEND_URL=${STRAPI_ADMIN_BACKEND_URL}
RUN yarn build


FROM node:22-bookworm-slim AS production-dependencies

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn config set network-timeout 600000 -g \
  && yarn install --frozen-lockfile --production=true \
  && yarn cache clean


FROM node:22-bookworm-slim AS runtime

WORKDIR /app

RUN apt-get update \
  && apt-get install -y --no-install-recommends libvips42 \
  && rm -rf /var/lib/apt/lists/* \
  && mkdir -p /app/.tmp \
  && chown node:node /app/.tmp

ENV NODE_ENV=production
ENV PATH=/app/node_modules/.bin:$PATH

COPY --from=production-dependencies --chown=node:node /app/node_modules ./node_modules
COPY --chown=node:node package.json yarn.lock ./
COPY --from=build --chown=node:node /app/build ./build
COPY --chown=node:node config ./config
COPY --chown=node:node database ./database
COPY --chown=node:node public ./public
COPY --chown=node:node src ./src
COPY --chown=node:node favicon.png ./

USER node

EXPOSE 1337
CMD ["yarn", "start"]
