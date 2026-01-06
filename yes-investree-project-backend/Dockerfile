# Use Node.js LTS as base image
FROM node:lts

# Set working directory
WORKDIR /opt/app

# Install dependencies first (for better caching)
COPY package*.json ./
RUN npm install --only=production

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Create non-root user
RUN groupadd -g 1001 nodejs
RUN useradd -r -u 1001 -g nodejs strapi

# Change ownership of the app directory
RUN chown -R strapi:nodejs /opt/app
USER strapi

# Expose port
EXPOSE 1337

# Start the application
CMD ["npm", "start"]