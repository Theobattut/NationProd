FROM php:8.2-cli

RUN apt-get update && apt-get install -y \
    git unzip libzip-dev \
    && docker-php-ext-install pdo pdo_mysql

WORKDIR /app
COPY . .

ENV APP_ENV=prod

EXPOSE 8080

CMD php -S 0.0.0.0:8080 -t public