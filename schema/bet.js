const mongoose = require('mongoose');

var Schema = mongoose.Schema; 

var Bet = new Schema ({
    name: String, 
    tournament: String,
    date: Date,
    bet: Number, 
    odd: Number,
    status: String,
    gain: Number,
    gambler: String
});


var Bet = mongoose.model('bet', Bet);

module.exports = Bet ; 
