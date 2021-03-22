const mongoose = require('mongoose');

var Schema = mongoose.Schema; 

var Bet = new Schema ({
    name: String, 
    tournament: String,
    date: Date,
    bet: Number, 
    status: String,
    gain: Number
});


var Bet = mongoose.model('bet', Bet);

module.exports = Bet ; 
