const express = require("express");
const app = express();
const mongoose = require('mongoose')
const path = require('path');
var Bet = require("./schema/bet.js");
var User = require("./schema/user.js");
var bodyParser = require('body-parser');
var cors = require('cors')
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 8080;
const uri = "mongodb+srv://puechce:Chaptal75@cluster0.npqtt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
     "Access-Control-Allow-Headers",
     "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


//Database connection 
mongoose.connect(uri, {  useNewUrlParser: true,  useUnifiedTopology: true}).then(() =>
 {  console.log('MongoDB Connected')}).catch(err => console.log(err))


// Serving the react app boilerplate
app.use(express.static(path.join(__dirname, 'client/src')));


//BodyParser
app.use(express.urlencoded({extended : false}));

//Routes Authentification 
app.use('/users', require('./routes/users'));

// Main API Routes 
app.get('/disp', (req, res) => {
  Bet.find().exec((err, result) => {
      if (err) {
          console.log("Error ", err);
          return res.json({
              success: false,
              error: err
          })
      }
      res.json({
          success: true,
          data: result
      })
  })
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

app.put('/status',(req,res) => {
  
  Bet.findOne({_id: req.body._id}).exec((err,result)=>{
    if (err) {
      console.log("Error ", err);
      return res.json({
          success: false,
          error: err
      })
    }
    result.status = req.body.status
    if (result.status==='win'){
      result.gain = result.bet*2;
    } else {
      result.gain = -result.bet ; 
    }
    console.log(result)
    result.save(function(err,updatedObject){
      if(err){
        console.log(err);
        res.status(500).send();
      } else {
        res.send(updatedObject);
      }
    })
});
  
});

//Authentification 
app.post('/login', (req, res) => {
  console.log(req.body.pseudo)
  User.findOne({pseudo: req.body.pseudo, password: req.body.password}).exec((err,result)=>{
    if (err) {
      console.log("Error ", err);
      return res.json({
          success: false,
          error: err
      })
    }
    if (result===null){
      res.send(false)
    } else {
      res.send(true)
    }
  });
  })
;

app.listen(port, () => {
    console.log(`----- listening on port ${port}`.success);
});