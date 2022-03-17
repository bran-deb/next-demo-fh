FROM node:16-alpine

# crea dir
RUN mkdir -p /app

# trabaja en
WORKDIR /app

# copia el package en el working directory
COPY package.json /app

# reconstruye node_modules
RUN npm install

#  copia todo y lo pega en dir /app
COPY . /app

# genera .next
RUN npm run build

# USER nextjs

# expone el puerto 3000
EXPOSE 3000

# Ejecuta el comando
CMD ["npm","start"]

# docker build -t {name-file} .