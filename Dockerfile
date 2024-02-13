# Etapa 1: Construir la aplicación React
FROM node:18-alpine
WORKDIR /app
COPY package*.json .
COPY vite.config.js .
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 8080
CMD ["npm", "run", "preview"]
