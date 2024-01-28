FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm ci

RUN npm i sharp

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]