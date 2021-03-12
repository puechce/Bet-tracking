const express = require("express");
const app = express();
const mongoose = require('mongoose')
const path = require('path');
var Bet = require("./schema.js");
var bodyParser = require('body-parser');
var router = express.Router();


app.use(express.static('build'))

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Database connection 
/*mongoose.Promise = global.Promise;*/
const uri = "mongodb+srv://puechce:Chaptal75@cluster0.npqtt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, {  useNewUrlParser: true,  useUnifiedTopology: true}).then(() =>
 {  console.log('MongoDB Connected')}).catch(err => console.log(err))
//Listenning port 
app.listen(process.env.PORT || 8000, () => {
  console.log(`listening on port ${process.env.PORT || 8000}`)
});

app.post("/test", (req, res) => {
        var myData = new Bet(req.body);
        myData.save()
          .then(item => {
            res.send("item saved to database");
          })
          .catch(err => {
            res.status(400).send("unable to save to database");
          });
});     


module.exports = router;