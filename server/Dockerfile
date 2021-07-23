FROM node:14.17.1-stretch

WORKDIR /home/back/

COPY package*.json ./

RUN npm -g install npm@latest

RUN npm install

CMD ["npm", "run", "dev"]

EXPOSE 2020