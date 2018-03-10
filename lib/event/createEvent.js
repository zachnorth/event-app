'use strict';

async function createEvent({
  client, 
  event, 
  createdAt = new Date()
}) {
  try {
    const res = await client.index({
      index: "event-app-event-index",
      type: 'event',
      body: Object.assign({}, event, {createdAt})
    });

    if (res.created) {
      return Object.assign({}, event, {id: res._id, createdAt});
    }
  }
  catch (error) {
    console.error(error);
  }
}

module.exports = createEvent;