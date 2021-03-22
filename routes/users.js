const express = require('express');
const router = express.Router();
const User = require("../schema/user.js");

//login handle

router.post('/register',(req,res)=>{
    var newUser = new User(req.body);
    newUser.save()
      .then(item => {
        res.send("new user saved to db");
      })
      .catch(err => {
        console.log(err)
        res.status(400).send("unable to save to database");
      })
});



module.exports  = router;