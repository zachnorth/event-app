'use strict';

const flattenResponse = require('../utils/flattenResponse');

async function getEvents({ client, offset, limit }) {
  try {
    const res = await client.search({
      index: 'event-app-event-index',
      type: 'event',
      from: offset,
      size: limit,
      body: {
        query: {
          match_all: {}
        }
      }
    });

    return flattenResponse({ res, array: true });
  }
  catch (error) {
    console.errror(error);
  }
}

module.exports = getEvents;