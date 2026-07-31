# Stage 1: Build the Vite React application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm ci || npm install

# Copy source files
COPY . .

# Build production static bundle to /app/dist
RUN npm run build

# Stage 2: Serve application with Nginx on Cloud Run
FROM nginx:alpine

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build artifacts from stage 1
COPY --from=builder /app/dist /usr/share/nginx/html

# Cloud Run forwards traffic to port 8080 by default
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
