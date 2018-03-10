var express = require('express');
var router = express.Router();

var createEvent = require('../lib/event/createEvent');

/*
Post parameters:
  title: Title of the event
  image: Optional image for the event
  tags: Array of event tags
  description: Event description
  location: Geo point for event: 
    { lat: 123 lon: -245}
  address: Address for the event:  
    {
      houseNumber: 3245,
      streetName: 'Canyon Street',
      townName: 'Boulder',
      state: 'CO',
      zipCode: '12345'
    }
  locationDetails: String of additional details relating to the location
  eventTimestampStart: JS date, timestamp start of the event
  eventTimestampEnd: JS date, timestamp end of the event
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
  
  createEvent({ 
    client: req.client,
    event
  })
    .then(result => res.send("Ok"))
    .catch(error => {
      console.error(error);
      res.send("Error")
    });

});

module.exports = router;
