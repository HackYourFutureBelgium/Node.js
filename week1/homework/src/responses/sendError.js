'use strict';

const error = { error: "Not found" };

function sendJsonError(response) {
  response.setHeader('Content-Type', 'application/json');
  response.statusCode = 404;
  response.write(JSON.stringify(error));
}

module.exports = {
  sendJsonError
};
