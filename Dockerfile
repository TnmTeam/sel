FROM node:16-alpine AS builder
WORKDIR /
COPY . .
RUN yarn install --immutable --immutable-cache --check-cache
RUN yarn build

FROM node:16-alpine
WORKDIR /
COPY --from=builder / ./
EXPOSE 3000
CMD ["yarn", "start"]