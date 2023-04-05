const express = require('express');
const routes = express.Router();

routes.use((req,res) =>{
    res.send('<html><form action="/product" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form></html>');
});

routes.post('/product',(req,res,next) =>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = routes;