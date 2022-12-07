#development stage
FROM node:lts-alpine as development-stage
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
CMD [ "yarn", "dev" ]

#build stage
FROM development-stage as build-stage
RUN yarn build

#production stage
FROM development-stage as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 3000
CMD [ "nginx", "-g", "daemon off;" ]



