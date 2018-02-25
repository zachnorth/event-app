'use strict';

const flattenResponse = require('../utils/flattenResponse');

async function searchEvents({ client, offset, limit, query }) {
  try {
    const res = await client.search({
      index: "event-app-event-index",
      type: 'event',
      from: offset,
      size: limit,
      q: `title:${query}`
    });
  }
  catch (error) {
    console.errror(error);
  }
}

module.exports = searchEvents;