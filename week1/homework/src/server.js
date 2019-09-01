'use strict';

const http = require('http');

function createServer(port) {
  let state = 10;
  let res = {};

  const server = http.createServer((request, response) => {
    switch (request.url) {
      case '/state':
        break;
      case '/add':
        state += 1;
        break;
      case '/subtract':
        state -= 1;
        break;
      case '/reset':
        state = 10;
        break;
      default:
        res = { error: 1 };
        break;
    }

    if (res.error === 1) {
      response.writeHead(404, { 'Content-Type': 'application/json' });
      res = JSON.stringify({ error: 'Not found' });
    } else {
      response.writeHead(200, { 'Content-Type': 'application/json' });
      res = JSON.stringify({ state: state });
    }
    response.end(res);
    return state;
  });

  return server;
}


module.exports = {
  createServer,
};

