FROM node:lts
WORKDIR /var/www
COPY  ./back-end /var/www
RUN yarn
ENTRYPOINT ["yarn", "deploy"]

EXPOSE 3333
