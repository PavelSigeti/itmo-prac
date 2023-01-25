FROM node:18.12
WORKDIR /api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9000

CMD node index.js
