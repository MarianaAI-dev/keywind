FROM node:18 as builder

# WORKDIR /app
# COPY package.json package-lock.json* ./

# RUN npm ci
# COPY . .

# RUN npm run build
# RUN npm run build:jar

# FROM ubuntu:22.04
# COPY --from=builder /app/out/keywind.jar /theme/keywind.jar
# WORKDIR /theme

# RUN ls /theme

# CMD ["sh"]

FROM ubuntu:22.04
RUN apt-get update && apt-get install -y curl
COPY ./theme ./theme
RUN curl -L -o apple-identity-provider.jar https://github.com/klausbetz/apple-identity-provider-keycloak/releases/download/1.14.0/apple-identity-provider-1.14.0.jar
WORKDIR /theme
CMD ["sh"]
