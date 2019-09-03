'use strict';

const error = `{
  error: "Not found"
}`;

function sendError(response) {
  response.setHeader('Content-Type', 'application/json');
  response.statusCode = 404;
  response.write(JSON.stringify(error));
}

function sendJson(response, state) {
  const resultToUser = {
    'state': state
  };

  response.setHeader('Content-Type', 'application/json');
  response.write(JSON.stringify(resultToUser));
}

module.exports = {
  sendError,
  sendJson
};
