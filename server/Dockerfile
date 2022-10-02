FROM node:14-alpine AS builder
WORKDIR /usr/src/app
COPY /*.json ./
COPY . .
RUN npm run build

FROM node:14-alpine
WORKDIR /usr/src/app
# #cyka blyat' a ne dist/main, blya debil syka ebaniy potratil 2 4aca na xyi
COPY --from=builder /usr/src/app ./
EXPOSE 3001
CMD ["npm", "run", "start:prod"]
