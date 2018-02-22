'use strict';
const GoogleAuth = require('google-auth-library');

const { GOOGLE_CLIENT_ID } = require('./constants');

const auth = new GoogleAuth;
const client = new auth.OAuth2(GOOGLE_CLIENT_ID, '', '');

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