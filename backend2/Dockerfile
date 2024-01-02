ARG IMAGE_NAME=backend2
FROM node:alpine
WORKDIR /
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD ["node", "backend_user.js"]