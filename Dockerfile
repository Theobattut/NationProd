FROM php:8.2-cli

# Installer dépendances système + PHP
RUN apt-get update && apt-get install -y \
    git unzip libzip-dev \
    && docker-php-ext-install pdo pdo_mysql

# Installer Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /app
COPY . .

# 🔥 INSTALLER LES DEPENDANCES
RUN composer install --no-dev --optimize-autoloader

ENV APP_ENV=prod

EXPOSE 8080

CMD php -S 0.0.0.0:8080 -t public