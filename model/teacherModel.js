const mongoose = require("mongoose");

const schema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    fullname:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique: true,
         match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
         required:true
        },
    image:{
        type:String,
        required:true
    }
})
mongoose.model("teacher",schema);