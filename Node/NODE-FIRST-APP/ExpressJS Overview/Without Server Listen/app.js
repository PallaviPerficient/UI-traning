const express = require('express');
const app = express();
app.use((req,res,next) =>{
    console.log("Without Server Listen Work");
    next();
})
app.listen(5000);