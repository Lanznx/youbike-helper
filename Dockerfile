FROM node:lts-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

RUN npm install -g nodemon

EXPOSE 3000
CMD [ "npm", "start" ]