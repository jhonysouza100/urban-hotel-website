# Etapa 1: Construir la aplicación React
FROM node:14 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Servir la aplicación con un servidor de producción
FROM nginx:alpine

# Copiar los archivos construidos desde la etapa anterior
COPY --from=builder /app/build /usr/share/nginx/html

# Expone el puerto 80 en el contenedor
EXPOSE 80

# No es necesario especificar un comando, ya que nginx arrancará automáticamente
