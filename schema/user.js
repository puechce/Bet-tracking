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
  },
    inibank:{
      type : Number,
      required : false  
  },
    bank:{
      type : Number, 
      required : false 
    }
  });

var User = mongoose.model('User',User);

module.exports = User;