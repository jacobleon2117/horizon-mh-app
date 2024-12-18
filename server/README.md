# Horizon Server

## Overview

Backend server for the Horizon Mental Health Platform

## Folder Structure

- \`src/\`
  - \`config/\`: Configuration files
  - \`controllers/\`: Route handlers
  - \`models/\`: Database models
  - \`routes/\`: API route definitions
  - \`middleware/\`: Express middleware
  - \`utils/\`: Utility functions

## Available Scripts

- \`npm run start\`: Start production server
- \`npm run dev\`: Start development server with nodemon
- \`npm run test\`: Run tests

## Key Dependencies

- Express.js
- Socket.io
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- Bcrypt

## Authentication

Implements JWT-based authentication with secure password hashing

## API Endpoints

- \`/api/auth\`: Authentication routes
- \`/api/users\`: User management
- \`/api/appointments\`: Appointment scheduling
- \`/api/journals\`: User journal entries

## Environment Variables

- \`PORT\`: Server port
- \`MONGODB_URI\`: Database connection string
- \`JWT_SECRET\`: Authentication secret
