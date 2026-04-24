FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

# Ensure uploads directory exists
RUN mkdir -p uploads

EXPOSE 3000

CMD ["node", "index.js"]
