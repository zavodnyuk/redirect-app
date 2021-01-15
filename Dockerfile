FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

COPY ./app/package.json ./

RUN npm install

COPY ./app/ .
# Run application
CMD [ "node", "index.js" ]
