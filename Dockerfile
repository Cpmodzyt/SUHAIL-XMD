# Use the official Node.js image from Docker Hub with the latest version
FROM node:20.18.0

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files into the container
COPY package*.json ./

# Install dependencies using npm
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Expose the port that your app will run on (if applicable, e.g., port 3000)
EXPOSE 3000

# Run your application
CMD ["npm", "start"]
