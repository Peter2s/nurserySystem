const express = require("express");
const router = express.Router();

const childrensController = require("../controller/childController");
const validator = require("../Core/validation/validatorMW");

// children validation array
const {getChildByid,childPost,childUpdate,childDelete} = require("../validation/childrenValidation")

router.route("/child")
    .get(childrensController.getAllchildren)
    .post(childPost,validator,childrensController.addChild)
    
router.route("/child/:_id")
    .get(getChildByid,validator,childrensController.getChildById)
    .patch(childUpdate,validator,childrensController.updateChild)
    .delete(childDelete,validator,childrensController.deleteChild)
module.exports = router;