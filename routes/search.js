var express = require('express');
var router = express.Router();

/*
Query parameters:
  limit: How many events to send back? Default 10
  q: Search for events by name/description/tags
  tags: Search for events matching a set of tags
  state: Filter by state
  
  Returns an array of results
    [
      {
        "name": ,
        "tags": ,
        "state": ,
      }
    ]
  
  Example: /events/search?q=swag
*/

router.get('/', function(req, res, next) {
  var q = req.query.q;
  var limit = req.query.limit || 10;
  var tags = req.query.tags;
  var state = req.query.state;
  console.log("Search: " + JSON.stringify(req.query, null, '  '));
  
  // TODO search
  var results = [];
  
  res.send(results);
});

module.exports = router;
