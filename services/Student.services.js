const Student = require('../models/student.model');

const createStudent = async (studentBody) => {
  return await Student.create(studentBody);
};
const queryStudents = async (filter, options) => {
  const students = await Student.find(filter, options).populate("classRoom").populate("parent");
  return students;
};

const getStudentById = async (id) => {
  return Student.findById(id);
};


const updateStudentById = async (studentId, updateBody) => {
  const student = await getStudentById(studentId);
  if (!student) {
    res.status(404).json({ message: 'Student not found'});
  }
  Object.assign(student, updateBody);
  await student.save();
  return student;
};

const deleteStudentById = async (studentId) => {
  const student = await getStudentById(studentId);
  if (!student) {
    res.status(404).json({ message: 'Student not found'});
  }
  await student.remove();
  return student;
};

module.exports = {
  createStudent,
  queryStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
};