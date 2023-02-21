const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);


const schema = mongoose.Schema({
    _id:{
        type:Number,
    },
    name:{
        type:String,
        required:true
    },
    supervisor:{
        ref:"teacher",
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    },
    children:{
        type: [Number],
        required:true,
        ref:"child"
    }
},{ _id: false })
schema.plugin(AutoIncrement,{
    id: 'class_model_id_counter',
    inc_field: "_id"
});
mongoose.model("class",schema);