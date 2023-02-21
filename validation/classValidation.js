const {body,param} = require("express-validator");
exports.classGetById = [
    param("_id").isInt().withMessage("id must be number"),
];
exports.classPost = [
    //body("_id").isInt().withMessage("id must be number"),
    body("name").isString().withMessage("Name must be string"),
    body("supervisor").isMongoId().withMessage("supervisor is require and must be number"),
    body("children").isArray().withMessage("children must be array of ids"),
    body("children.*").isInt().withMessage("every element in children must be number ")
];
exports.classUpdate = [
    param("_id").isInt().withMessage("id must be number"),
    body("name").optional().isString().withMessage("Name must be string"),
    body("supervisor").optional().isMongoId().withMessage("supervisor is require and must be number"),
    body("children").optional().isArray().withMessage("children must be array of ids"),
    body("children.*").optional().isInt().withMessage("every element in children must be number ")
];
exports.classDelete = [
    param("_id").isInt().withMessage("id must be number"),
];
