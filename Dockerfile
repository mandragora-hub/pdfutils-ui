FROM node:20 as base

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Install deps
RUN npm ci
# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
COPY . .

# Build dist
RUN npm run build

# Start production image build
FROM gcr.io/distroless/nodejs20-debian11

# Labels
LABEL org.opencontainers.image.source=https://github.com/mandragora-hub/metadata-extractor
LABEL org.opencontainers.image.description="PDF Metadata extractor for OpenContainers"
LABEL org.opencontainers.image.licenses=MIT


# Copy node modules and build directory
COPY --from=base /usr/src/app/node_modules ./node_modules
COPY --from=base /usr/src/app/dist ./app/dist

# Supress warning
# RUN apt-get install uuid-dev

# Copy static files
COPY public app/public

# Expose port 3000

# Express best practices
ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000
CMD ["app/dist/server.js"]