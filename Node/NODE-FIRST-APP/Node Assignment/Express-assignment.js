const express = require('express');
const app = express();

app.use('/users',(req,res,next) =>{
    res.send('<h1>Pallavi kanfade</h1>')
    next();
})
app.use('/',(req,res,next) =>{
    res.send('<h1>Assignment</h1>')
    console.log("In the MiddleWare"); 
})


app.listen(3030);