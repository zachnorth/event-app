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
  var results = [
      {
          "name": "Amazing Scavenger Hunt Adventure- Boulder",
          "time": {
              "start": "Friday, March 09, 2018 10:00 am",
              "end": "Friday, March 09, 2018 11:00 am",
          },
          "location": "Boulder Central Park, 1200 Canyon Blvd, Boulder, CO",
          "description": "Turn Boulder into a giant game board with this fun scavenger hunt adventure. Combine the excitement of the Amazing Race with a three-hour city tour. Guided from any smart phone, teams make their way among well known and overlooked gems of the city, solving clues and completing challenges while learning local history.",
          "contact": {
              "name": "Eric West",
              "email": "eric@urbanadventurequest.com",
              "phone": "303-333-3333"
          }
      },
      {
          "name": "Marijuana Concentrates Class",
          "time": {
              "start": "Friday, March 15, 2018 10:00 am",
              "end": "Friday, March 15, 2018 11:00 am",
          },
          "location": "331 Steel St, Denver CO.",
          "description": "This 2.5-hour marijuana concentrates excursion offers an extraordinary opportunity to get an immersive look into Marijuana concentrates. During the tour, learn about the specifics of concentrates, types, extraction methods, solvents, and solventless. Learn why consuming concentrates is becoming the preferred method of consumption among Colorado's cannabis consumers. PLUS every guest will receive a FREE Limited Edition Vape Pen (a $60 Value) to use and take home with them. Join us for product samplings and more.",
          "contact": {
              "name": "Kelly Barbosa",
              "email": "info@420tours.com",
              "phone": "855-555-5555"
          }
      }
  ];
  
  res.send(results);
});

module.exports = router;
