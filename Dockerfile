# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Create a working directory
WORKDIR /app

# Copy package.json and package-lock.json (if present)
COPY package*.json ./

# Install npm dependencies
RUN npm install --production

# Copy the rest of your application
COPY . .

# Expose the port your app runs on (3000 is just an example)
EXPOSE 3000

# Define the command to start your app
CMD [ "npm", "start" ]
