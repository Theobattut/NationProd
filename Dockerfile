FROM dunglas/frankenphp:php8.4

RUN install-php-extensions pdo_mysql

WORKDIR /app
COPY . .

ENV APP_ENV=prod

EXPOSE 8080

CMD ["frankenphp", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]