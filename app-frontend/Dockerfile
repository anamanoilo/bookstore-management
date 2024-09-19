FROM node:lts-alpine AS client-dependencies

WORKDIR /app
COPY package.json package-lock.json  ./

RUN npm ci

FROM node:lts-alpine AS client-builder

WORKDIR /app
COPY --from=client-dependencies /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
ARG API_URL
RUN npm run build

FROM node:lts-alpine AS client-production-runner
WORKDIR /usr/src/app

# NOTE it would've been better to use nginx or similar instead
RUN npm -g install static-server

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 react

# Copy only the least possible amount of files to save final image size
COPY --from=client-builder /app/public ./public
COPY --from=client-builder --chown=react:nodejs /app/dist ./

USER react

ENV PORT=3005

CMD static-server -p ${PORT}
