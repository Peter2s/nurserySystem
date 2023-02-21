const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const addressSchema = mongoose.Schema({
    city: {
        type:String,
        required:true
    },
    street: {
        type:String,
        required:true
    },
    building: {
        type:Number,
        required:true
    }
})
const schema = mongoose.Schema({
    _id:{
        type:Number,
    },
    fullName:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true,
        min:0,
        max:12
    },
    level:{
        type: String,
        required:true,
        enum: ['PreKG','KG1','KG2']
    },
    address: {
        type:addressSchema,
        required:true
    }
},{ _id: false })
schema.plugin(AutoIncrement,{
    id: 'child_model_id_counter',
     inc_field: "_id"
    });
mongoose.model("child",schema);

