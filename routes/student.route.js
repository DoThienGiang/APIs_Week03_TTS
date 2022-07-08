const express = require('express');
const router = express.Router();
const studentController = require("../controllers/student.controller");
const validate = require('../middlewares/validate');
const studentValidation = require('../validate/student.validate');

router
  .route("/")
  .post(validate(studentValidation.createStudent), studentController.createStudent)
  .get(validate(studentValidation.getStudents), studentController.getStudents);

router
  .route("/:studentId")
  .get(validate(studentValidation.getStudent), studentController.getStudent)
  .patch(validate(studentValidation.updateStudent), studentController.updateStudent)
  .delete(validate(studentValidation.deleteStudent), studentController.deleteStudent);

module.exports = router;