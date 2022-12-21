/**
 * Goals:
 * - [x] Set up our Express app and export it
 * - [] API handles three routes
 *  - [x] GET / : "health check" route that returns "hello world"
 *  - [] GET /students : return a list of all students
 *  - [] GET /students/:id : return a student with a particular id
 */
const express = require('express');

// Initialize an app instance
const app = express();

// Health check
app.get('/', (request, response) => {
  response.send('Hello world!');
});

// GET /students


// GET /students/:id



module.exports = app;