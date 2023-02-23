const express = require("express");
const router = express.Router();

const classController = require("../controller/classController");
const validator = require("../Core/validation/validatorMW");

const {checkAdmin} = require("../Core/Auth/authenticationMW");


// class validation array
const {classPost,classUpdate,classDelete,classGetById} = require("../validation/classValidation")
const {getChildByid} = require("../validation/childrenValidation");


router.route("/class")
    .all(checkAdmin)
    .get(classController.getAllClass)
    .post(classPost,validator,classController.addClass)
    
router.route("/class/:_id")
    .all(checkAdmin)
    .get(classGetById,validator,classController.getClassById)
    .patch(classUpdate,validator,classController.updateClass)
    .delete(classDelete,validator,classController.deleteClass)

router.route("/classchildern/:_id")
    .all(checkAdmin)
    .get(getChildByid,validator,classController.getClassChildren)
    
router.route("/classTeacher/:_id")
    .all(checkAdmin)
    .get(classGetById,validator,classController.getClassSupervisor)

module.exports = router;