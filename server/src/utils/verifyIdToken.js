'use strict';
const { OAuth2Client } = require('google-auth-library');

const { GOOGLE_CLIENT_ID } = require('./constants');

const client = new OAuth2Client(GOOGLE_CLIENT_ID, '', '');

function verifyIdToken(token) {
  return new Promise((resolve, reject) => {
    client.verifyIdToken(token, GOOGLE_CLIENT_ID, (error, login) => {
      if (error) {
        reject(error);
      } else {
        resolve(login.getPayload());
      }
    });
  });
}

module.exports = verifyIdToken;