const express = require('express');
const router = express.Router();

// var validate = require('../validate/student.validate')

const parent_controller = require('../controllers/parent.controller');

router.post('/parent/create',parent_controller.parent_create);

router.get('/parent', parent_controller.parent_details);

router.get('/parent/:id', parent_controller.parent_details_id);

router.put('/parent/update/:id', parent_controller.parent_update);

router.delete('/parent/delete/:id', parent_controller.parent_delete);

module.exports = router;