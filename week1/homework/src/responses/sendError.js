'use strict';

const error = {
  error: "Not found"
};

function sendError(response) {
  response.setHeader('Content-Type', 'application/json');
  response.write(JSON.stringify(error));
  response.statusCode = 404;
}

module.exports = sendError;
