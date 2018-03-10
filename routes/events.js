var express = require('express');
var router = express.Router();

var getEvents = require('../lib/event/getEvents');

router.post('/', function(req, res, next) {

  getEvents({ 
    client: req.client,
    offset: req.body.offset,
    limit: req.body.limit || 100
  })
    .then(result => res.send(JSON.stringify(result)))
    .catch(error => {
      console.error(error);
      res.send("Error")
    });
    
});

module.exports = router;
