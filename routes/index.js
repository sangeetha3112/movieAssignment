var express = require('express');
var router = express.Router();
var fs=require('fs');
var bodyParser = require('body-parser');


var app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* Reading json for getting movie details*/
router.get('/readjson', function(req, res){
  var data=fs.readFileSync('json/movies.json');
  res.json(data.toString());
});

module.exports = router;
