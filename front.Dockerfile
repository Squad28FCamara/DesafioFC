FROM node:lts
WORKDIR /var/www
COPY  ./front-end /var/www
RUN yarn
ENTRYPOINT ["yarn", "start"]

EXPOSE 3333
