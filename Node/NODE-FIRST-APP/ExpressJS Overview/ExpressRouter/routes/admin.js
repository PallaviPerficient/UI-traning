const express = require('express');
const routes = express.Router();
const path = require('path');


//admin/add-product => Get
routes.get('/add-product',(req,res) =>{
    // res.send('<html><form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form></html>');
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
});

//admin/add-product => POST
routes.post('/add-product',(req,res,next) =>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = routes;