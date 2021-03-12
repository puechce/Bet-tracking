const mongoose = require('mongoose');

var Schema = mongoose.Schema; 

var Bet = new Schema ({
    name: String, 
    tournament: String,
    date: Date,
    bet: Number, 
});

var Bet = mongoose.model('bet', Bet);
module.exports = Bet; 

/*
var match = new Bet({name:'barca'})
match.save()
   .then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   })
*/