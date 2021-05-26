FROM node:latest as node
WORKDIR /app
COPY ./ /app/
RUN npm install
RUN npm run build -- --prod

FROM nginx:alpine
COPY --from=node /app/dist/gymder_frontend /usr/share/nginx/html

EXPOSE 80
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.con

