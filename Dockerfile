FROM node:18

WORKDIR /usr/src/app

COPY . .

CMD [ "node", "client.js" ]