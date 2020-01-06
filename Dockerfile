FROM node:latest

COPY . /app

WORKDIR /app

RUN npm install

ENTRYPOINT [ "node", "/app/server.js" ]