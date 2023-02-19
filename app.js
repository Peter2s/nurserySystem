const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const cors = require("cors");
const logger = require("morgan");

app.use(cors());
app.use(logger("tiny"));

// MW auth
app.use((req,res,next)=>{
    if(false)
        next();
    else
        next(new Error("not authentication "));
})
// not found MW
app.use((req,res,next)=>{
    res.status(404)
    .json({massage:"page not found"})
})
// error MW
app.use((err,req,res,next)=>{
    res.status(500)
    .json({massage:err+""});
})

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
