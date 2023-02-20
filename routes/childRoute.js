const express = require("express");
const router = express.Router();

const childrensController = require("../controller/childController");
const validator = require("../Core/validation/validatorMW");

// children validation array
const {getChildByid,childPost,childUpdate,childDelete} = require("../validation/childrenValidation")

router.route("/child")
    .get(childrensController.getAllchildren)
    .post(childPost,validator,childrensController.addChild)
    .patch(childUpdate,validator,childrensController.updateChild)
    
router.route("/child/:_id")
    .get(getChildByid,validator,childrensController.getChildById)
    .delete(childDelete,validator,childrensController.deleteChild)
module.exports = router;