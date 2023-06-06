FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --silent
COPY . .
EXPOSE 3001
RUN npx prisma generate
ENTRYPOINT ["npm", "run", "debug"]
