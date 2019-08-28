'use strict';

function sendError(response) {
  response.setHeader('Content-Type', 'application/json');
  response.statusCode = 404;
  response.write(`{ 
    "error": "Not found" 
}`);
}

module.exports = sendError;
