FROM node:14

WORKDIR /location-api

COPY package.json .

COPY .env .

RUN npm install

COPY . .

CMD ["node", "app.js"]
