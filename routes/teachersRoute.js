const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

//multer configuration 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,"..","images"))
    },
    filename: function (req, file, cb) { 
      cb(null, Date.now()  + '-' +file.originalname)
    },
  })
const upload = multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname);
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback(new Error('Only images are allowed'))
        }
        callback(null, true)
    },
    limits:{
        fileSize: 2 * 1024
    }   
})


const teachersController = require("../controller/teachersController");
const validator = require("../Core/validation/validatorMW");

const {checkTeacherAndAdmin} = require("../Core/Auth/authenticationMW")


// teachers validation array
const {teacherID,teachersPost,teachersUpdate,teachersDelete} = require("../validation/teachersValidation")

router.route("/teachers")
    .all(checkTeacherAndAdmin)
    .get(teachersController.getAllTeachers)
    .post(upload.single('image'),teachersPost,validator,teachersController.addTeacher)
    
router.route("/teachers/:_id")
    .all(checkTeacherAndAdmin)
    .get(teacherID,validator,teachersController.getTeacherById)
    .patch(teachersUpdate,validator,teachersController.updateTeacher)
    .delete(teachersDelete,validator,teachersController.deleteTeacher)
module.exports = router;