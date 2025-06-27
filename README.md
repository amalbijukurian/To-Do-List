# MERN To-Do List

A full-stack To-Do List application built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Features
- Add, edit, and delete tasks
- Mark tasks as completed
- Responsive UI with React and Vite
- RESTful API backend with Node.js and Express
- MongoDB for persistent storage

## Project Structure

```
todo-list/                # Frontend (React + Vite)
  src/
    components/
    assets/
  ...
todo-list backend/        # Backend (Node.js + Express)
  controllers/
  models/
  ...
```

## Getting Started

### Prerequisites
- Node.js & npm
- MongoDB (local or cloud)

### Backend Setup
1. Navigate to the backend folder:
   ```sh
   cd "todo-list backend"
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   node server.js
   ```
   The backend will run on `http://localhost:5000` by default.

### Frontend Setup
1. Navigate to the frontend folder:
   ```sh
   cd todo-list
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend development server:
   ```sh
   npm run dev
   ```
   The frontend will run on `http://localhost:5173` by default.

## API Endpoints
- `GET /api/activities` - Get all tasks
- `POST /api/activities` - Add a new task
- `PUT /api/activities/:id` - Update a task
- `DELETE /api/activities/:id` - Delete a task

## License
MIT
