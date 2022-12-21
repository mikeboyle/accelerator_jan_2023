const express = require('express');
const studentData = require('../studentData.json');

const studentController = express.Router();
const { students } = studentData;


// GET /students
studentController.get('/', (request, response) => {
  response.status(200).json(students);
});

// GET /students/:id
studentController.get('/:id', (request, response) => {
  // Get the id from params
  const { id } = request.params;

  // (Try to!) find the student by id
  const student = findStudentById(students, id);

  if (student) {
    response.status(200).json(student);
  } else {
    response.status(404).json({ error: `Could not find student with id ${id}`});
  }
});

/**
 * Given a list of student objects and an id, find
 * the student with the given id. If no student can be found,
 * return null.
 * 
 * @param {*} students a list of student objects
 * @param {*} id an id
 * 
 * @returns a student or null
 */
const findStudentById = (students, id) => {
  for (let student of students) {
    if (student.id === id) {
      return student;
    }
  }
  // We got this far, so we couldn't find the student
  return null;
}

module.exports = studentController;