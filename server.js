const express = require("express");
const app = express();
const mongoose = require('mongoose')
const path = require('path');
var Bet = require("./schema.js");
var bodyParser = require('body-parser');


app.use(express.static('build'))

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Database connection 
const uri = "mongodb+srv://puechce:Chaptal75@cluster0.npqtt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, {  useNewUrlParser: true,  useUnifiedTopology: true}).then(() =>
 {  console.log('MongoDB Connected')}).catch(err => console.log(err))


// Serving the react app boilerplate
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'))
})

app.post("/test", (req, res) => {
        var myData = new Bet(req.body);
        myData.save()
          .then(item => {
            res.send("item saved to database");
          })
          .catch(err => {
            console.log(err)
            res.status(400).send("unable to save to database");
          });
});     

var port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`----- listening on port ${port}`.success);
});