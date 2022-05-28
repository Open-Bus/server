var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.send('Now you are on home page');
});

router.get('/hi', function(req, res) {
    res.render('hi', { title: 'hi Express' });
    //res.send('Now you are on home page');
  });


//from here
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var stopsNearMe = require('./../stopsNearMe');

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// POST /login gets urlencoded bodies
router.post('/stopsNearMe_2', urlencodedParser, function (req, res) {
  res.send('Latitude: ' + req.body.latitude);
})

// POST /api/users gets JSON bodies
router.post('/stopsNearMe', jsonParser, function (req, res) {

    //res.render('hi', { title: 'hi Express' });
    
    
    //res.send(req.body.Latitude);

  var stopsNear = stopsNearMe.stopsNearMe(req.body.Latitude, req.body.Longitude);

  // create user in req.body
  //res.send('Latitude: ' + req.body.Latitude);

  stopsNear.forEach(element => {
    console.log(element);
    });

    console.log(stopsNear.length);

    res.send('Stops ' + stopsNear);
    
})

module.exports = router;
