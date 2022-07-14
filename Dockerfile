FROM node:17.9

WORKDIR /brthomiu/src/app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN yarn build

EXPOSE 8080
CMD [ "yarn", "start" ]