FROM node:lts-alpine
WORKDIR /usr/src/app
  
RUN npm install -g migrate-mongo

COPY . .

CMD [ "migrate-mongo", "up" ]
