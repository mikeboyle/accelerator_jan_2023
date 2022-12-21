/**
 * Goals:
 * - [x] Set up our Express app and export it
 * - [x] API handles three routes
 *  - [x] GET / : "health check" route that returns "hello world"
 *  - [x] GET /students : return a list of all students
 *  - [x] GET /students/:id : return a student with a particular id
 */
const express = require('express');
const studentController = require('./controllers/studentController');

// Initialize an app instance
const app = express();

// Health check
app.get('/', (request, response) => {
  response.send('Hello world!');
});

// Controllers
app.use('/students', studentController);

module.exports = app;