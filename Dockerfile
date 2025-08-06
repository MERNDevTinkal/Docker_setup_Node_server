FROM node

WORKDIR /devops/docker/my-server

COPY . .

RUN npm install -g nodemon && npm ci

CMD ["nodemon", "server.js"]






