# MERN Stack Application

## Overview

This project is a full-stack MERN (MongoDB, Express, React, Node.js) application designed to handle three operations on Abstract Syntax Trees (ASTs):
- *Create AST*
- *Combine ASTs*
- *Evaluate ASTs*

The application consists of a React frontend and an Express backend that communicates with MongoDB to store, process, and evaluate AST rules.

## Features
- Frontend built using React.
- Backend API built using Node.js and Express.
- MongoDB is used for data persistence.
- CORS is enabled to allow communication between frontend and backend.

## Prerequisites

Before setting up the project, ensure you have the following software installed:

- *Node.js* (v12 or higher): [Download](https://nodejs.org/en/download/)
- *npm*: Comes with Node.js.
- *MongoDB*: [Install MongoDB](https://www.mongodb.com/try/download/community) or use a cloud solution like MongoDB Atlas.


## Setup Instructions

### 1. Clone the Repository

   ```bash
   git clone https://github.com/mohammedafrin/backend-rule-engine.git
   cd backend-rule-engine

   ```

### 2. Backend Setup (backend)

1. Install the backend dependencies:
   ```bash
   npm install
   
2. Create a .env file in the server directory with the following content:

   ```bash
   PORT=5000
   FRONTEND_URL=http://localhost:5000
   MONGO_URI=mongodb+srv://mohommedafrin1974:F3Lh0txa2scnWqRy@cluster0.cl2z4.mongodb.net/?retryWrites=true&w=majority&
               

3. Start the backend server:
   ```bash
   npm run start

   ```

The backend will now be running at [http://localhost:5000](http://localhost:5000).

### 3. Frontend Setup 

1. clone front end repository:
   ```bash
   git clone https://github.com/mohammedafrin/mern-rule-engine-project.git
   cd mern-rule-engine-project
   cd frontend
2. Install the frontend dependencies:
   ```bash
   npm install
   
3. Start the frontend React app:
   ```bash
   npm run start
   
The frontend will be running at [http://localhost:3000](http://localhost:3000).
Your Web Application is Live now and you are ready to use it

### 4. Connecting Frontend and Backend

Ensure that the React frontend is able to communicate with the backend by:

- Setting the correct API URL (REACT_APP_API_URL) in the .env file of the frontend.
- Allowing the frontend origin in the backend’s CORS settings (CORS_ORIGIN in .env).

### 5. MongoDB Setup

 -If you're using *MongoDB locally*, ensure that the MongoDB service is running on your machine
- For *MongoDB Atlas (cloud)*, replace MONGO_URI in your backend .env file with your Atlas connection string.

Example:
bash
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/db-name?retryWrites=true&w=majority


## Running the Application

### Start Backend
Goto backend window of VScode
```bash
npm run dev
```

### Clone frontend repo
now open frontend window of Vscode
```bash
npm run start
```
bash

## API Endpoints

The backend provides the following API routes:

1. *Create AST*
   - *Method*: POST
   - *Endpoint*: /api/rules/create
   - *Description*: Create an AST rule from request data.

2. *Combine ASTs*
   - *Method*: POST
   - *Endpoint*: /api/rules/combine
   - *Description*: Combine multiple AST rules.

3. *Evaluate AST*
   - *Method*: POST
   - *Endpoint*: /api/rules/evaluate
   - *Description*: Evaluate an AST rule based on the given conditions.

## Deployment

### Backend Deployment (e.g., Heroku)

1. Log in to Heroku:
   ```bash
   heroku login
   

2. Create a new Heroku app:
   ```bash
   heroku create your-app-name
   

3. Push your code to Heroku:
   ```bash
   git push heroku main
   

4. Set up environment variables on Heroku:
   ```bash
   heroku config:set MONGO_URI=your-mongodb-url
   heroku config:set CORS_ORIGIN=https://your-frontend-url.com
   

### Frontend Deployment (e.g., Netlify, Vercel)

1. Build the React app:
   ```bash
   npm run build
   

2. Deploy the build folder to *Netlify, **Vercel*, or another hosting service.

For Netlify:

- Upload the build folder to Netlify via their UI, or use the CLI to deploy the folder.

### Environment Variables for Production

Ensure that your environment variables in both the frontend and backend are correctly set for the production environment. In React, environment variables for production must start with REACT_APP_.

## Troubleshooting

1. *CORS Issues*: If the frontend is not receiving data from the backend, ensure that the CORS_ORIGIN is set properly in the backend .env file.

2. *API Requests Failing*: Double-check the REACT_APP_API_URL in the frontend .env file and ensure it matches the deployed backend URL.

3. *MongoDB Connection Errors*: Ensure your MongoDB connection string in MONGO_URI is correct and that the database is accessible from your hosting provider.


---
