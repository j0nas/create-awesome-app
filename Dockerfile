FROM node:16-alpine
EXPOSE 3000

WORKDIR /home/app

COPY package* /home/app/
RUN npm ci

COPY . /home/app
ARG NODE_ENV=development

CMD [[ '$NODE_ENV' == 'production' ]] && npm run build && npm run start || npm run dev
