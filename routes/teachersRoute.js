const express = require("express");
const router = express.Router();

const teachersController = require("../controller/teachersController");
const validator = require("../Core/validation/validatorMW");

// teachers validation array
const {teachersPost,teachersUpdate,teachersDelete} = require("../validation/teachersValidation")

router.route("/teachers")
    .get(teachersController.getAllTeachers)
    .post(teachersPost,validator,teachersController.addTeacher)
    .patch(teachersUpdate,validator,teachersController.updateTeacher)
    .delete(teachersDelete,validator,teachersController.deleteTeacher)

module.exports = router;