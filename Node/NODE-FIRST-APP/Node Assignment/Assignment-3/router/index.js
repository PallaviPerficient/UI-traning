const express = require('express');
const router = express.Router();
const path = express('path');

router.get('/',(req , res, next) =>{
    // res.send('Rout1')
    res.sendFile(path.join(__dirname,'..','views','index.html'))
})

router.get('/users',(req , res, next) =>{
    // res.send('Rout 2')
    res.sendFile(path.join(__dirname,'..','views','users.html'))

})
module.exports = router;