FROM node:lts-alpine
WORKDIR /usr/src/app
  
COPY package.json package-lock.json  ./

RUN npm install -g migrate-mongo
RUN npm install

COPY . .

CMD [ "migrate-mongo", "up" ]
