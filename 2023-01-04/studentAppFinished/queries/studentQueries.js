const studentData = require('../studentData.json');
const { students } = studentData;

const indexStudentsById = () => {
  const studentIndexById = {};
  for (const student of students) {
    const { id } = student;
    studentIndexById[id] = student;
  }

  console.log('indexed students by id');
  return studentIndexById;
}

const studentIndexById = indexStudentsById();


/**
 * Return all students in the data
 * @returns all students
 */
const getAllStudents = () => {
  return students;
}

/**
 * Find the student with the given id.
 * If no student can be found, return null.
 * 
 * @param {*} id an id
 * 
 * @returns a student or null
 */
const findStudentById = (id) => {
  // Look up the student in the index (default to null if not found)
  const student = studentIndexById[id] || null;
  
  return student;
}

module.exports = {
  getAllStudents,
  findStudentById,
}
