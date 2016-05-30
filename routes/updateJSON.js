var express = require('express');
var router = express.Router();
var fs=require('fs');
var bodyParser = require('body-parser');
var jsonfile = require('jsonfile');

var app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });


/* Updating a movie */
router.post('/', function(req, res){
  console.log("Inside Update Method");
  jsonfile.readFile("json/movies.json",function(err,content){
    console.log("content==>"+JSON.stringify(content));
  var obj = {};
  console.log("req title="+req.body.Title+" Poster="+req.body.Poster+" Year="+req.body.Year+" Actors="+req.body.Actors+" Director="+req.body.Director+" Plot="+req.body.Plot+" Released="+req.body.Released);
  for(var i=0;i<content.length;i++)
     {
       if(content[i].Title==req.body.Title)
       {
         content[i].Title=req.body.Title;
         content[i].Poster=req.body.Poster;
         content[i].Year=req.body.Year;
         content[i].Actors=req.body.Actors;
         content[i].Director=req.body.Director;
         content[i].Plot=req.body.Plot;
         content[i].Released=req.body.Released;
       }
     }
     fs.writeFile('json/movies.json', JSON.stringify(content, null, 4), function(err) {
       console.log("Finished updating json record");
       if(err) {
          console.log(err);
      }
  });
  res.redirect("/");
});
});
module.exports = router;
