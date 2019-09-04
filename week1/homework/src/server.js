const http = require('http');
const state = require('./state');

function createServer(port) {

  const server = http.createServer((request, response) => {
    const url = request.url;

    switch (url) {
      case '/state':
        respondJSON(response, 200, state.get());
        break;
      case '/add':
        respondJSON(response, 200, state.add());
        break;
      case '/subtract':
        respondJSON(response, 200, state.subtract());
        break;
      case '/reset':
        respondJSON(response, 200, state.reset());
        break;
      default:
        respondJSON(response, 404, {
          error: 'Not found'
        });
        break;
    }
  });

  return server;
}

function respondJSON(resp, statusCode, messageObj) {
  resp.writeHead(statusCode, {
    'Content-Type': 'application/json'
  });
  resp.write(JSON.stringify(messageObj));
  resp.end();
}

module.exports = {
  createServer
};