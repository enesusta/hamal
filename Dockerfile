FROM mhart/alpine-node:12

ARG USER_NAME

COPY package.json /data/

WORKDIR /data/

RUN npm install

ENV PATH /data/node_modules/.bin:$PATH

COPY . /data/app/

WORKDIR /data/app/

ENTRYPOINT ["node", "index.js"]