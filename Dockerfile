# ETAPA 1: BUILDER - Compilación del sitio Astro

# Utilizamos la última imagen oficial de Node con Alpine Linux para un tamaño pequeño
FROM node:20-alpine AS builder

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de definición de dependencias
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente
COPY . .

# Compila el sitio Astro
# Astro genera el output en la carpeta 'dist' por defecto
RUN npm run build 

# ----------------------------------------------------------------------

# ETAPA 2: PRODUCTION - Servir el sitio estático con Nginx

# Usamos la imagen Nginx más ligera disponible
FROM nginx:alpine

# Copia la configuración de Nginx para el routing de Astro/SPAs (opcional, pero recomendado)
# Si tu sitio es estático puro, puedes omitir esta línea. 
# Si usas routing en el lado del cliente (como Angular), necesitas una configuración de Nginx.
# COPY nginx.conf /etc/nginx/conf.d/default.conf 

# 🎯 Copia los archivos estáticos compilados (desde /app/dist) al directorio de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# El puerto 80 es el puerto estándar que Nginx escucha
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]