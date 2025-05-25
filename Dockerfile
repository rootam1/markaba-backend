# Use official Node.js image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY backend/package*.json ./
RUN npm install

# Bundle app source
COPY backend/ .

# Expose port
EXPOSE 5000

# Start the server
CMD [ "node", "app.js" ]
