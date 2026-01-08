# Build stage
FROM node:20 AS builder

ENV NODE_OPTIONS=--max_old_space_size=8192

WORKDIR /app

RUN npm config set legacy-peer-deps true

# Copy package files
COPY package*.json ./

# Install dependencies with all required i18n packages
RUN npm install --no-audit --no-fund --legacy-peer-deps && \
    npm install react-i18next i18next next-i18next --legacy-peer-deps

# Copy source
COPY . .

# Skip build for now - will build at runtime when Strapi is ready
# RUN npm run build

# Production stage
FROM node:20-alpine3.19

RUN apk add --no-cache dumb-init

WORKDIR /app

# Copy package files and source (not built yet)
COPY --from=builder /app ./

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
# Build and start when container runs (when Strapi is ready)
CMD ["sh", "-c", "npm run build && npm start"]
