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

# Installer les dépendances PHP
RUN composer install --no-dev --optimize-autoloader --no-scripts

# Définir l'environnement
ENV APP_ENV=prod
ENV APP_DEBUG=0

# Exposer le port utilisé par Railway
EXPOSE 8080

# Lancer le serveur PHP
CMD ["php", "-S", "0.0.0.0:8080", "-t", "public"]