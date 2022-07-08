const express = require('express');
const parentController = require("../controllers/parent.controller");
const validate = require('../middlewares/validate');
const parentValidation = require('../validate/parent.validate');
const router = express.Router();

router
  .route("/")
  .post(validate(parentValidation.createClassRoom), parentController.createParent)
  .get(validate(parentValidation.getParents), parentController.getParents);

router
  .route("/:parentId")
  .get(validate(parentValidation.getParent), parentController.getParent)
  .patch(validate(parentValidation.updateParent), parentController.updateParent)
  .delete(validate(parentValidation.deleteParent), parentController.deleteParent);

module.exports = router;
