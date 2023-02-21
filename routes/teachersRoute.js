const express = require("express");
const router = express.Router();

const teachersController = require("../controller/teachersController");
const validator = require("../Core/validation/validatorMW");

// teachers validation array
const {teacherID,teachersPost,teachersUpdate,teachersDelete} = require("../validation/teachersValidation")

router.route("/teachers")
    .get(teachersController.getAllTeachers)
    .post(teachersPost,validator,teachersController.addTeacher)
    
router.route("/teachers/:_id")
    .get(teacherID,validator,teachersController.getTeacherById)
    .patch(teachersUpdate,validator,teachersController.updateTeacher)
    .delete(teachersDelete,validator,teachersController.deleteTeacher)
module.exports = router;