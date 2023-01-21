# Base Image
FROM node:19.3.0

# Working Directory
WORKDIR /server

# Copy Files and Install Dependencies
COPY ./package.json ./

RUN npm install

COPY ./ ./

# Start Server
CMD ["npm", "start"]