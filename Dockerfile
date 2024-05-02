# Using the official Node.js 16 image.
FROM node:16-alpine

# Creating and change to the app directory.
WORKDIR /usr/src/app

# Copying application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

# Install production dependencies.
RUN npm install --only=production

# Copy local code to the container image.
COPY . .

# Expose the port the app runs on
EXPOSE 8080

# Run the web service on container startup.
CMD [ "node", "server.js" ]
