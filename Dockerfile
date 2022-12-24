FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 4000
ENV MONGODB_URI='mongodb+srv://admin:admin@cluster0.wwcjllg.mongodb.net/BuscaTuProfe'
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
