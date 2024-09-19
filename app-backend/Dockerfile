FROM node:lts-alpine
WORKDIR /usr/src/app
  
COPY package*.json .

RUN npm ci

COPY . .

ENV NODE_ENV=production
ENV PORT=3001

RUN npm run build

EXPOSE 3001
CMD [ "node", "dist/main" ]
