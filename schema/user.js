const mongoose = require('mongoose');

var Schema = mongoose.Schema; 

var User  = new Schema ({
    pseudo:{
        type  : String,
        required : true
    },
  password:{
      type  : String,
      required : true
  } 
  });

var User = mongoose.model('User',User);

module.exports = User;