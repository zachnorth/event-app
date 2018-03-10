var express = require('express');
var router = express.Router();

/*
Post parameters:
  name: The name of the event
  location: The location of the event
  tags: An array of event tags
*/

router.post('/', function(req, res, next) {
  
  var name = req.body.name;
  var location = req.body.location;
  var tags = req.body.tags;
  
  // TODO create event
  
  res.send("Ok");
});

module.exports = router;
