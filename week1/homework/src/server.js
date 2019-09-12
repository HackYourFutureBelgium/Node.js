'use strict';

const http = require('http');

/* `createServer` MUST return an instance of `http.Server` otherwise the tests
 * will fail.
 */
const sendResponse = (status, response, state) => {
  response.writeHead(status, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(state));
};

function createServer(port) {
  let state = 10;

  const server = http.createServer((request, response) => {
    switch (request.url) {
      case '/state':
        sendResponse(200, response, { state });
        break;
      case '/add':
        state++;
        sendResponse(200, response, { state });
        break;
      case '/subtract':
        state--;
        sendResponse(200, response, { state });
        break;
      case '/reset':
        state = 10;
        sendResponse(200, response, { state });
        break;
      default:
        sendResponse(404, response, { error: 'Not found' });
        break;
    }
    response.end();
  });


  return server;
}

module.exports = {
  createServer
};
