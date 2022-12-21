const express = require('express');
const { findStudentById, getAllStudents } = require('../queries/studentQueries');

const studentController = express.Router();

// GET /students
studentController.get('/', (request, response) => {
  const students = getAllStudents();
  response.status(200).json(students);
});

// GET /students/:id
studentController.get('/:id', (request, response) => {
  // Get the id from params
  const { id } = request.params;

  // (Try to!) find the student by id
  const student = findStudentById(id);

  if (student) {
    response.status(200).json(student);
  } else {
    response.status(404).json({ error: `Could not find student with id ${id}`});
  }
});



module.exports = studentController;