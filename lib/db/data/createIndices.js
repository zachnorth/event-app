const elasticsearch = require('elasticsearch');
const config = require('../config');

const client = new elasticsearch.Client({
  host: config.elasticsearch.host + ":" + config.elasticsearch.port,
  log: 'trace'
});

async function createIndicies() {
  try {
    await client.indices.create({
      index: "event-app-user-index",
      body: {
        mappings: {
          user: {
            properties: {
              email: {type: 'keyword'},
              name: {type: 'text'},
              imageUrl: {type: 'text', index: false},
              createdAt: {type: 'date'}
            }
          }
        }
      }
    });

    await client.indices.create({
      index: "event-app-event-index",
      body: {
        mappings: {
          event: {
            properties: {
              hostId: {type: 'keyword'},
              title: {type: 'text'},
              image: {type: 'text', index: false},
              tags: {type: 'keyword'},
              description: {type: 'text'},
              location: {type: 'geo_point'},
              address: {type: 'object'},
              locationDetails: {type: 'text'},
              eventTimestampStart: {type: 'date'},
              eventTimestampEnd: {type: 'date'},
              createdAt: {type: 'date'}
            }
          }
        }
      }
    });
  }
  catch (error) {
    console.error(error);
  }
}

createIndicies();