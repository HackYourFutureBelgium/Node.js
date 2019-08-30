'use strict';

const http = require('http');

/* `createServer` MUST return an instance of `http.Server` otherwise the tests
 * will fail.
 */
function createServer(port) {
  let state = 10;

  const server = http.createServer((request, response) => {
    const url = request.url;
    const responseWrite = () => {
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.write(JSON.stringify({ state }));
    };
    switch (url) {
      case '/state':
        responseWrite();
        break;

      case '/add':
        state++;
        responseWrite();
        break;

      case '/subtract':
        state--;
        responseWrite();
        break;

      case '/reset':
        state = 10;
        responseWrite();
        break;

      default:
        response.writeHead(404, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify({ error: 'Not found' }));
    }

    response.end();
  });

  return server;
}

module.exports = {
  createServer,
};
