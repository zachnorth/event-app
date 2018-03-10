var express = require('express');
var router = express.Router();

var createEvent = require('../lib/event/createEvent');

/*
Post parameters:
  name: The name of the event
  location: The location of the event
  tags: An array of event tags
*/

router.post('/', function(req, res, next) {

  var event = {
    title: req.body.title,
    image: req.body.image,
    tags: req.body.tags,
    description: req.body.description,
    location: req.body.location, 
    address: req.body.address,
    locationDetails: req.body.locationDetails,
    eventTimestampStart: req.body.eventTimestampStart,
    eventTimestampEnd: req.body.eventTimestampEnd
  };
  
  // TODO create event

  createEvent({ 
    client: req.client,
    event
  })
    .then(result => res.send("Ok"))
    .catch(error => {
      console.error(error);
      res.send("Error")
    });
  
  // res.send("Ok");
});

module.exports = router;
