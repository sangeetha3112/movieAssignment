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

/* Adding a new movie */
router.post('/', function(req, res){
console.log("Inside Add Method");
var content=JSON.parse(fs.readFileSync('json/movies.json'));

var obj = {};
    obj.Title=req.body.Title;
    obj.Poster=req.body.Poster;
    obj.Year=req.body.Year;
    obj.Actors=req.body.Actors;
    obj.Director=req.body.Director;
    obj.Plot=req.body.Plot;
    obj.Released=req.body.Released;
    obj.Awards=req.body.AwardsReceived
    obj.Ratings=req.body.RatingsReceived
    console.log(obj);
    content.push(obj);
    fs.writeFile('json/movies.json', JSON.stringify(content, null, 4), function(err) {
      console.log("Added new movie successfully");
      if(err) {
      console.log(err);
      }
  });
  res.redirect("/");
});

module.exports = router;
