FROM node:16-alpine
EXPOSE 3000

WORKDIR /home/app

COPY package* /home/app/
RUN npm ci

COPY . /home/app
CMD ./scripts/start.sh
