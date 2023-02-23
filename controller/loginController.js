const jwt = require("jsonwebtoken");
// teacher schema
const mongoose = require("mongoose");
require("../model/teacherModel");
const TeacherShcema = mongoose.model("teacher");

module.exports = (req,res,next)=>{
    if(req.body.fullname == 'admin' && req.body.password == '123'){
        const token = jwt.sign({id:10,role:'admin'},'ITI',{expiresIn:'1h'});
        res.json(token);
    }
    else{
        TeacherShcema.findOne({fullname:req.body.fullname,password:req.body.password})
            .then(data=>{
                if(data == null){
                    const error = new Error;
                    error.status = 401;
                    error.message = " not authenticated";
                    next(error);
                }else{
                    const token = jwt.sign({id:data._id
                        ,role:'teacher'},'ITI',
                        {expiresIn:'1h'});
                    res.json(token);
                }
            })
            .error(err=>next(err))
        
       
    }
}
