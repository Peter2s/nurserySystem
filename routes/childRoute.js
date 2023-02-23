const express = require("express");
const router = express.Router();

const childrensController = require("../controller/childController");
const validator = require("../Core/validation/validatorMW");
const {checkAdmin} = require("../Core/Auth/authenticationMW")

// children validation array
const {getChildByid,childPost,childUpdate,childDelete} = require("../validation/childrenValidation")

router.route("/child")
    .all(checkAdmin)
    .get(childrensController.getAllchildren)
    .post(childPost,validator,childrensController.addChild)
    
router.route("/child/:_id")
    .all(checkAdmin)
    .get(getChildByid,validator,childrensController.getChildById)
    .patch(childUpdate,validator,childrensController.updateChild)
    .delete(childDelete,validator,childrensController.deleteChild)
module.exports = router;