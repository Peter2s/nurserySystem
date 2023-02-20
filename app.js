const express = require('express');
const app = express();
const cors = require("cors");
const logger = require("morgan");

const teachersRoute = require("./routes/teachersRoute");
const childrenRoute = require("./routes/childRoute");
const classRoute = require("./routes/ClassRoute");

const port = process.env.PORT || 8080;



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

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
