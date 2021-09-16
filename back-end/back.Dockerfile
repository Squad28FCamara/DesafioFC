FROM node:lts
WORKDIR /var/www
COPY  ./back-end /var/www
RUN yarn
ENTRYPOINT ["yarn", "start"]

EXPOSE 3333
