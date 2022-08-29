FROM node:16

LABEL service="Admin service"

WORKDIR /admin/app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3001

EXPOSE 3001

CMD [ "npm", "start" ]