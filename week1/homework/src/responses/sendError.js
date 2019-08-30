'use strict';

const error = {
  error: "Not found"
};

function sendError(response) {
  response.setHeader('Content-Type', 'application/json');
  response.statusCode = 404;
  response.write(JSON.stringify(error));

}

module.exports = sendError;
