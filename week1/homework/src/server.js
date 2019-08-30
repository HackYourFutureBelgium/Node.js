'use strict';

const http = require('http');

function createServer(port) {
  let state = 10;
  let res = {};

  const server = http.createServer((request, response) => {
    switch (request.url) {
      case '/state':
        response.writeHead(200, { 'Content-Type': 'application/json' });
        res = JSON.stringify({ state: state });
        response.end(res);
        break;
      case '/add':
        state += 1;
        response.writeHead(200, { 'Content-Type': 'application/json' });
        res = JSON.stringify({ state: state });
        response.end(res);
        break;
      case '/subtract':
        state -= 1;
        response.writeHead(200, { 'Content-Type': 'application/json' });
        res = JSON.stringify({ state: state });
        response.end(res);
        break;
      case '/reset':
        state = 10;
        response.writeHead(200, { 'Content-Type': 'application/json' });
        res = JSON.stringify({ state: state });
        response.end(res);
        break;
      default:
        response.writeHead(404, { 'Content-Type': 'application/json' });
        res = JSON.stringify({ error: 'Not found' });
        response.end(res);
        break;
    }
    return state;
  });

  return server;
}

module.exports = { createServer };
