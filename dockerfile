FROM node:14.16.0-alpine3.10
WORKDIR /usr/app
COPY package*.json ./
RUN npm install --save-dev typescript
RUN npm install -G ts-node
RUN npm install
COPY . .
CMD ["npm", "run", "start"]