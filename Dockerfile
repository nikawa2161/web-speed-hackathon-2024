# ビルドステージ
FROM node:20.11.1-alpine AS builder

WORKDIR /usr/src/app

RUN apk --no-cache add tzdata && \
    cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
    apk del tzdata

RUN apk --no-cache add jemalloc
ENV LD_PRELOAD=/usr/lib/libjemalloc.so.2

COPY . .
RUN corepack enable pnpm
RUN pnpm install
RUN pnpm build

# Nginxステージ
FROM nginx:alpine

COPY --from=builder /usr/src/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]