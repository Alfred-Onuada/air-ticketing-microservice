FROM node:16

LABEL service="Booking service"

WORKDIR /booking/app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3002

EXPOSE 3002

CMD [ "npm", "start" ]