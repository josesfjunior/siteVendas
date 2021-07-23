FROM node:14.17.1-stretch
WORKDIR /home/front/
COPY package*.json ./
RUN npm -g install npm@latest
RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]