FROM node:14
WORKDIR /src/vue-mooc
COPY package.json /src/vue-mooc
RUN npm install && npm install --save babel-core && npm install --save babel-preset-env && npm install babel-cli -g
RUN apt-get update && apt-get install -y net-tools
COPY . /src/vue-mooc
EXPOSE 3400
EXPOSE 4300
CMD ["npm","run","serve"]
