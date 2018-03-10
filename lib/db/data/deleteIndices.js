const elasticsearch = require('elasticsearch');
const config = require('../../config');

const client = new elasticsearch.Client({
  host: config.elasticsearch.host,
  log: 'trace'
});

async function deleteIndices() {
  try {
    /*
    await client.indices.delete({
      index: USER_INDEX
    });
    */

    await client.indices.delete({
      index: 'event-app-event-index'
    });
  }
  catch (error) {
    console.error(error);
  }
}

deleteIndices();