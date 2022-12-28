/**
 * This file represents our Express API application
 *
 * TODOs:
 * - [] Create routes (using hardcoded JSON for now, not a real db):
 *  - [] Health check route to confirm the server is up and running
 *  - [] Get all students
 *  - [] Get student by ID
 *
 * - [] Organize our app into controller and query layers 
 * - [] Use a router to organize the routes by their prefixes (/students, /teachers, /posts, etc.)
 */

const express = require('express');

// Initialize app and general app configuration
const app = express();
app.use(express.json()); // Why do we need this?

// Route handler functions
app.get('/', (request, response) => {
  console.log(request, response);

  response.json({ message: 'Service is running' });
});

module.exports = app;
