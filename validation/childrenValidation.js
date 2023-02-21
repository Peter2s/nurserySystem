const {body,param} = require("express-validator");
exports.getChildByid = [
    param("_id").isInt().withMessage("id must be number")
]
exports.childPost = [
    //body("_id").isInt().withMessage("id must be number"),
    body("fullName").isString().withMessage("fullName must be string"),
    body("age").isInt({max:12}).withMessage("age must be number and the max is 12"),
    body("level").isIn(["PreKG","KG1","KG2"]).withMessage("level must be in [PreKG,KG1,KG2] "),
    body("address").isObject(),
    body("address.city").isString().withMessage("city is require and String"),
    body("address.street").isString().withMessage("city is require and String"),
    body("address.building").isInt().withMessage("city is require and number")
];
exports.childUpdate = [
    param("_id").isInt().withMessage("id must be number"),
    body("fullName").optional().isString().withMessage("fullName must be string"),
    body("age").optional().isInt({max:12}).withMessage("age must be number and the max is 12"),
    body("level").optional().isIn(["PreKG","KG1","KG2"]).withMessage("level must be in [PreKG,KG1,KG2] "),
    body("address").optional().isObject(),
    body("address.city").optional().isString().withMessage("city is require and String"),
    body("address.street").optional().isString().withMessage("city is require and String"),
    body("address.building").optional().isInt().withMessage("city is require and number")
];
exports.childDelete = [
    param("_id").isInt().withMessage("id must be number"),
];