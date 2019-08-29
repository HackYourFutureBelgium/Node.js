'use strict';

function sendJson(response, state) {
  const resultToUser = {
    'state': state
  };

  response.setHeader('Content-Type', 'application/json');
  response.write(JSON.stringify(resultToUser));
}

module.exports = sendJson;
