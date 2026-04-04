FROM dunglas/frankenphp:php8.4

RUN install-php-extensions pdo_mysql

COPY . /app
WORKDIR /app

ENV APP_ENV=prod

CMD ["frankenphp", "run", "--config", "/etc/caddy/Caddyfile"]