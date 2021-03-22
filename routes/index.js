const express = require('express');
const router  = express.Router();
const path = require('path');

//login page
router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'client/src/index.js'))
})

//register page
router.get('/register', (req,res)=>{
    res.render('register');
})

module.exports = router; 