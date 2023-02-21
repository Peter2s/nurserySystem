const express = require('express');
const app = express();
const mongoose = require("mongoose");

const cors = require("cors");
const logger = require("morgan");

const teachersRoute = require("./routes/teachersRoute");
const childrenRoute = require("./routes/childRoute");
const classRoute = require("./routes/ClassRoute");
// ========= server =========
const port = process.env.PORT || 8080;
mongoose.set("strictQuery",true);
mongoose.connect('mongodb://127.0.0.1:27017/nursery-system')
    .then(()=> {
    console.log("DB connected");
    app.listen(port, () => console.log(`listening on http://localhost:${port}`));
})
    .catch((error)=> console.log(`DB connection error ${error}`))
//=======================================


app.use(cors());
app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(teachersRoute);
app.use(childrenRoute);
app.use(classRoute);

// not found MW
app.use((req,res,next)=>{
    res.status(404)
    .json({massage:"page not found"})
})
// error MW
app.use((err,req,res,next)=>{
    let status=err.status||500;
    res.status(status).json({message:err+""});
})

