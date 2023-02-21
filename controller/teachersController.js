const mongoose = require("mongoose");
require("../model/teacherModel");
const TeachersSchema = mongoose.model("teacher");

const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.getAllTeachers = (req,res)=>{
    TeachersSchema.find({})
    .then(data=>res.status(200).json({data}))
    .catch(err=>next(err))
}
exports.getTeacherById = (req,res)=>{
    TeachersSchema.findById(req.params._id)
    .then(data=> res.status(200).json({data}))
    .catch(error=>next(error))
}
exports.addTeacher = async (req,res,next)=>{
    const passwordHashed = await bcrypt.hash(req.body.password, saltRounds)
    new TeachersSchema({
        _id:req.body._id,
        fullname:req.body.fullname,
        password:passwordHashed,
        email:req.body.email,
        image:req.body.image
    }).save()
    .then(data=> res.status(201).json({data}))
    .catch(error=>next(error))
}
exports.updateTeacher = async (req,res,next)=>{
    const passwordHashed = await bcrypt.hash(req.body.password, saltRounds)
    TeachersSchema.updateOne(
        {
            _id:req.params._id
        },
        {
            $set:{
                fullname:req.body.fullname,
                password:passwordHashed,
                email:req.body.email,
                image:req.body.image
            }
        }
        )
    .then(data =>{
        if(data.modifiedCount == 0){
            throw new Error("not found this teacher")
        }
        res.status(200).json({data});
    })
    .catch(error=>next(error))
}
exports.deleteTeacher = (req,res,next)=>{
    TeachersSchema.deleteOne({_id:req.params._id})
    .then(data=>{
        if(data.deletedCount > 0)
            res.status(200).json({data})
        else
            throw new Error("can't delete not exist teacher ")
    })
    .catch(error=>next(error))
}