const express = require('express');
const classRoomController = require("../controllers/classRoom.controller");
const validate = require('../middlewares/validate');
const classRoomValidation = require('../validate/classRoom.validate');
const router = express.Router();

router
  .route('/')
  // .post(validate(professionalValidation.createProfessional), classRoomController.createClassRoom)
  .post(validate(classRoomValidation.createClassRoom), classRoomController.createClassRoom)
  .get(validate(classRoomValidation.getClassRooms), classRoomController.getClassRooms);

router
  .route('/:classRoomId')
  .get(validate(classRoomValidation.getClassRoom), classRoomController.getClassRoom)
  .patch(validate(classRoomValidation.updateClassRoom), classRoomController.updateClassRoom)
  .delete(validate(classRoomValidation.deleteClassRoom), classRoomController.deleteClassRoom);

module.exports = router;


