ARG IMAGE_NAME=backend
FROM node:alpine
WORKDIR /
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "backend_product.js"]