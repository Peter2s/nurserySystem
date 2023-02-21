const { default: mongoose } = require("mongoose");

require("../model/childModel");
const ChildShcema = mongoose.model("child");

exports.getAllchildren = (req,res,next)=>{
    ChildShcema.find()
        .then(data=> res.status(200).json({data}))
        .catch(error=>next(error))
}
exports.getChildById = (req,res,next)=>{
    ChildShcema.findById(req.params._id)
    .then(data=> res.status(200).json({data}))
    .catch(error=>next(error))
}
exports.addChild = (req,res,next)=>{
    new ChildShcema({
        _id:req.body._id,
        fullName:req.body.fullName,
        age:req.body.age,
        level:req.body.level,
        address:req.body.address
    }).save()
    .then(data=> res.status(201).json({data}))
    .catch(error=>next(error))
}
exports.updateChild = (req,res,next)=>{
    ChildShcema.updateOne(
        {
            _id:req.params._id
        }
        ,{
            $set:{
                fullName:req.body.fullName,
                age:req.body.age,
                level:req.body.level,
                address:req.body.address
            }
        })
    .then(data =>{
        if(data.modifiedCount == 0){
            throw new Error("not found this child")
        }
        res.status(200).json({data});
    })
    .catch(error=>next(error))
}
exports.deleteChild = (req,res,next)=>{
    ChildShcema.deleteOne({_id:req.params._id})
    .then(data=>{
        if(data.deletedCount > 0)
            res.status(200).json({data})
        else
            throw new Error("can't delete not exist child ")
    })
    .catch(error=>next(error))
}