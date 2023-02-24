const jwt = require("jsonwebtoken");
const bcrpt = require("bcrypt");
// teacher schema
const mongoose = require("mongoose");
require("../model/teacherModel");
const TeacherShcema = mongoose.model("teacher");

const checkUserPassword =  async ( password,passwordHash)=> {
    const match = await bcrypt.compare(password, passwordHash);
    if(match) return true;
    return false

}

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
                    if(!checkUserPassword(req.body.password,data.password))
                        next(error);
                    const token = jwt.sign({id:data._id
                        ,role:'teacher'},'ITI',
                        {expiresIn:'1h'});
                    res.json(token);
                }
            })
            .error(err=>next(err))
        
       
    }
}
