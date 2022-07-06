const express = require('express');
const router = express.Router();

var validate = require('../validate/student.validate')

const student_controller = require('../controllers/student.controller');

router.post('/student/create', validate.postCreate ,student_controller.student_create);

router.get('/student', student_controller.student_details);

router.get('/student/:id', student_controller.student_details_id);

router.put('/student/update/:id', student_controller.student_update);

router.delete('/student/delete/:id', student_controller.student_delete);

module.exports = router;