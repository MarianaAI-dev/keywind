FROM node:18 as builder

COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build
RUN npm run build:jar

FROM ubuntu:22.04
COPY --from=builder /app/out/keywind.jar /app/keywind.jar
WORKDIR /app
