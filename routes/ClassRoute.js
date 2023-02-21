const express = require("express");
const router = express.Router();

const classController = require("../controller/classController");
const validator = require("../Core/validation/validatorMW");

// class validation array
const {classPost,classUpdate,classDelete,classGetById} = require("../validation/classValidation")
const {getChildByid} = require("../validation/childrenValidation");

router.route("/class")
    .get(classController.getAllClass)
    .post(classPost,validator,classController.addClass)
    
router.route("/class/:_id")
    .get(classGetById,validator,classController.getClassById)
    .patch(classUpdate,validator,classController.updateClass)
    .delete(classDelete,validator,classController.deleteClass)

router.route("/classchildern/:_id")
    .get(getChildByid,validator,classController.getClassChildren)
    
router.route("/classTeacher/:_id")
    .get(classGetById,validator,classController.getClassSupervisor)

module.exports = router;