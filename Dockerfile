# First Stage
FROM node:alpine as build

WORKDIR /usr/src/app
COPY . .
RUN yarn build




# Last Stage
FROM node:alpine

WORKDIR /usr/src/app
COPY --from=build /usr/src/app/build ./build
COPY ./text.txt ./text.txt


CMD [ "node", "./build/index.js" ]
