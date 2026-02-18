FROM node:20-alpine AS builder

ENV NODE_ENV=production \
    REACT_APP_VERSION=1.0.0 \
    REACT_APP_NAME="Kuberdocker EBIOS"

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:alpine AS production

COPY --from=builder /app/dist /usr/share/nginx/html

RUN echo 'server { \
    listen 80; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ { \
        expires 1y; \
        add_header Cache-Control "public, immutable"; \
    } \
    error_page 404 /index.html; \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

LABEL maintainer="Expert Systeme, Reseaux et Securite Informatique" \
      description="Application EBIOS Risk Manager pour Kuberdocker" \
      version="1.0.0" \
      documentation="https://github.com/votre-repo/kuberdocker-ebios"
