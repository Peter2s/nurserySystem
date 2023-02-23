const {body,param} = require("express-validator")
exports.teacherID = [
    param("_id").isMongoId().withMessage("id must be object ID")
]
exports.teachersPost = [
    body("_id").isMongoId().withMessage("id must be object ID"),
    body("fullname").isString().withMessage("full name is require and must be string"),
    body("password").isString().withMessage("password is require"),
    body("email").isEmail().withMessage("email is require and must be with email format"),
    body("image").optional().isString().withMessage("image is require")
]
exports.teachersUpdate = [
    param("_id").isMongoId().withMessage("id must be object ID"),
    body("fullname").optional().isString().withMessage("full name is require and must be string"),
    body("password").optional().isString().withMessage("password is require"),
    body("email").optional().isEmail().withMessage("email is require and must be with email format"),
    body("image").optional().isString().withMessage("image is require")
]
exports.teachersDelete = [
    param("_id").isMongoId().withMessage("id must be object ID"),
]