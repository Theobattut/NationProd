FROM php:8.2-cli

RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libzip-dev \
    libicu-dev \
    && docker-php-ext-install \
    pdo \
    pdo_mysql \
    intl \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /app

COPY . .

ENV COMPOSER_ALLOW_SUPERUSER=1
ENV COMPOSER_HOME=/tmp

ARG DATABASE_URL="sqlite:///%kernel.project_dir%/var/data.db"
ENV DATABASE_URL=$DATABASE_URL

RUN composer install --no-dev --optimize-autoloader

ENV APP_ENV=prod
ENV APP_DEBUG=0

EXPOSE 8080

CMD ["php", "-S", "0.0.0.0:8080", "-t", "public"]
