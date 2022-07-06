FROM node:16-alpine

WORKDIR /app
COPY package.json ./
RUN npm install yarn && yarn
COPY ./ ./

CMD ["yarn", "dev"]