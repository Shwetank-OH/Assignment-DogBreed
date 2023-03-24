# FROM node:latest as build

# WORKDIR /usr/local/app

# COPY ./ /usr/local/app/

# RUN npm install

# RUN npm run build



# FROM nginx:latest
# COPY --from=build /usr/local/app/dist/assignment-dog-breed /usr/share/nginx/html
# EXPOSE 80

FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/assignment-dog-breed /usr/share/nginx/html
