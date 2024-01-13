FROM node:18-alpine AS builder

# Dockerfile
RUN apk add build-base libc6-compat gcompat curl && \
    curl -fsSL https://get.pnpm.io/install.sh | sh -

RUN mv /root/.local/share/pnpm/pnpm /usr/bin/

WORKDIR /app

COPY . .

RUN pnpm install

RUN pnpm run build

FROM nginx:alpine

#COPY nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/build .

CMD ["nginx", "-g", "daemon off;"]