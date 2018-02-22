'use strict';

const getTimestamp = require('../utils/getTimestamp');
const { USER_INDEX } = require('../utils/constants');

async function createUser({ 
  client, 
  id, 
  email, 
  name, 
  imageUrl, 
  timestamp = getTimestamp()
}) {
  try {
    const res = await client.create({
      index: USER_INDEX,
      type: 'user',
      id: id,
      body: {
        name,
        email,
        imageUrl,
        createdAt: timestamp
      }
    });

    if (res.created) {
      return {
        id: res._id,
        name,
        email,
        imageUrl,
        createdAt: timestamp
      };
    }
  }
  catch (error) {
    console.log(error);
  }
}

module.exports = createUser;