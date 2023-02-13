FROM cypress/base:latest

WORKDIR /home/node/app

COPY cypress.config.js package.json package-lock.json ./

COPY cypress ./cypress

ENV CI=1

RUN npm i

RUN npx cypress verify