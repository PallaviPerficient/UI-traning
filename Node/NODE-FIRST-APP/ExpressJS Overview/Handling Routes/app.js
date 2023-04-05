const express = require('express');
const app = express();
app.use('/',(req,res,next) =>{
    console.log("This Always Run");
    // res.send('<html><h1>This Always Run</h1></html>')
    next();
})

app.use('/app',( req,res,next) =>{
    console.log("In the App Product Page");
    res.send('<h1>App Product Page</h1>')
})

app.use("/",(req,res,next) =>{
    console.log("In another Middleware");
    res.send('<h1>Hello From Express</h1>')
})

app.listen(2000);