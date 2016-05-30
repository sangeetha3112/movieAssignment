var express = require('express');
var router = express.Router();
var fs=require('fs');
var bodyParser = require('body-parser');


var app=express();

/* Deleting a movie */
router.post('/', function(req, res){
  console.log("Inside Delete Method");
  var content=JSON.parse(fs.readFileSync('json/movies.json'));
  console.log("conent==>"+JSON.stringify(content));
  var obj = {};
  var newContent=[];

  for(var i=0; i<content.length; i++){
    if(content[i].Title==req.body.Title)
    {
      continue;
    }
    else
    {
      console.log("Title does not match"+content[i]);
      newContent.push(content[i]);
    }
  }
  fs.writeFile('json/movies.json', JSON.stringify(newContent, null, 4), function(err) {
    console.log("Deleted json record successfully");
    if(err) {
    console.log(err);
    }
  });

  res.redirect("/");
});

module.exports = router;
