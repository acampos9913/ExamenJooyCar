FROM node:18-alpine

RUN npm install -g ts-node

WORKDIR /app

COPY package*.json ./

COPY . ./

RUN npm install

ENV NODE_ENV=production

RUN npm run build

EXPOSE 505

CMD ["npm","start"]