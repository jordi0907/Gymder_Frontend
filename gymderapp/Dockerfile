FROM node:latest AS build
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run-script build

FROM nginx:stable-alpine
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/www /usr/share/nginx/html
EXPOSE 80