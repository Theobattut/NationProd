FROM php:8.2-cli

# Installer les dépendances système nécessaires
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

# Installer Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Définir le répertoire de travail
WORKDIR /app

# Copier le projet
COPY . .
# 🔥 IMPORTANT : pas de scripts ici
RUN composer install --no-dev --optimize-autoloader --no-scripts

ENV APP_ENV=prod
ENV APP_DEBUG=0

EXPOSE 8080

# 🔥 scripts exécutés au runtime (avec variables dispo)
CMD composer install --no-dev --optimize-autoloader && php bin/console cache:clear --env=prod && php -S 0.0.0.0:8080 -t public

# Lancer le serveur PHP
CMD ["php", "-S", "0.0.0.0:8080", "-t", "public"]
