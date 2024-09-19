FROM node:lts-alpine AS client-dependencies

WORKDIR /app
COPY package.json package-lock.json  ./

RUN npm ci

FROM node:lts-alpine AS client-builder

WORKDIR /app
COPY --from=client-dependencies /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
RUN npm run build

FROM node:lts-alpine AS client-production-runner
WORKDIR /usr/src/app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 react

# Copy only the least possible amount of files to save final image size
COPY --from=client-builder /app/public ./public
COPY --from=client-builder /app/package.json ./package.json

COPY --from=client-builder --chown=react:nodejs /app/.next/standalone ./
COPY --from=client-builder --chown=react:nodejs /app/.next/static ./.next/static

USER react

CMD ["npm", "run", "docker-run"]
# NOTE In case of API server deployed separately, the following would be the run command:
# CMD [ "node", "server.js" ]
