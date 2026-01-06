# Build stage
FROM node:20 AS builder

ENV NODE_OPTIONS=--max_old_space_size=8192

WORKDIR /app

RUN npm config set legacy-peer-deps true

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --no-audit --no-fund --legacy-peer-deps && \
    npm install react-i18next@14.1.2 --legacy-peer-deps

# Copy source
COPY . .

# Build
RUN npm run build

# Production stage
FROM node:20-alpine3.19

RUN apk add --no-cache dumb-init

WORKDIR /app

# Copy everything from build stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.* ./

# Create minimal i18n fallback
RUN mkdir -p ./public/locales/en && \
    echo '{}' > ./public/locales/en/common.json

# Create user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001 && \
    chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

ENV NODE_ENV=production
ENV PORT=3000
ENV NEXT_TELEMETRY_DISABLED=1

ENTRYPOINT ["dumb-init", "--"]
CMD ["npm", "start"]
