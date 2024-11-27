# Stage 1: Build the application
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Create production image
FROM nginx:alpine

# Copy the build output from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Add runtime configuration script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Inject environment variables into a static JavaScript file
RUN echo 'window.REACT_APP_API_URL="DEFAULT_URL";' > /usr/share/nginx/html/env-config.js

# Ensure env-config.js is loaded in index.html
RUN sed -i 's|</head>|<script src="env-config.js"></script></head>|' /usr/share/nginx/html/index.html

# Expose port 80
EXPOSE 80

# Use entrypoint script to inject dynamic runtime environment variables
ENTRYPOINT ["/entrypoint.sh"]

# Default command
CMD ["nginx", "-g", "daemon off;"]
