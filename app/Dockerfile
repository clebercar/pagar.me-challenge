FROM node:10

WORKDIR /app

COPY package*.json ./

RUN npm install -g yarn nodemon

RUN yarn install

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "start" ]
