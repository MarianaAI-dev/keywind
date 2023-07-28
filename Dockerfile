FROM node:18 as builder

WORKDIR /app
COPY package.json package-lock.json* ./

RUN npm ci
COPY . .

RUN npm run build
RUN npm run build:jar

FROM ubuntu:22.04
COPY --from=builder /app/out/keywind.jar /theme/keywind.jar
WORKDIR /theme
