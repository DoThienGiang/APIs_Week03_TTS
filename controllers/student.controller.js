const pick = require('../utils/pick');
const studentService = require('../services/Student.services');

const createStudent = async (req, res) => {
  const student = await studentService.createStudent(req.body);
  res.status(200).send(student);
};

const getStudents = async (req, res) => {
  const filter = pick(req.query, ['parent']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await studentService.queryStudents(filter, options);
  res.send(result);
};

const getStudent = async (req, res) => {
  const student = await studentService.getStudentById(req.params.studentId);
  if (!student) {
    res.status(404).json({ message: 'Student not found'});
  }
  res.send(student);
};

const updateStudent = async (req, res) => {
  const student = await studentService.updateStudentById(req.params.studentId, req.body);
  res.send(student);
};

const deleteStudent = async (req, res) => {
  await studentService.deleteStudentById(req.params.studentId);
  res.status(200).send();
};

module.exports = {
  createStudent,
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent,
};