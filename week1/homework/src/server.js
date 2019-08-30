'use strict';

const http = require('http');

function createServer(port) {
  let state = 10;
  let res = {};

  const server = http.createServer((request, response) => {
    switch (request.url) {
      case '/state':
        console.log('State');
        response.writeHead(200, { 'Content-Type': 'application/json' });
        res = JSON.stringify({ state: state });
        response.write(res);
        response.end();
        break;
      case '/add':
        console.log('Add');
        state += 1;
        response.writeHead(200, { 'Content-Type': 'application/json' });
        res = JSON.stringify({ state: state });
        response.write(res);
        response.end();
        break;
      case '/subtract':
        console.log('Subtract');
        state -= 1;
        response.writeHead(200, { 'Content-Type': 'application/json' });
        res = JSON.stringify({ state: state });
        response.write(res);
        response.end();
        break;
      case '/reset':
        console.log('Reset');
        state = 10;
        response.writeHead(200, { 'Content-Type': 'application/json' });
        res = JSON.stringify({ state: state });
        response.write(res);
        response.end();
        break;
      default:
        console.log('Default');
        response.writeHead(404, { 'Content-Type': 'application/json' });
        res = JSON.stringify({ error: 'Not Found' });
        response.write(res);
        response.end();
        break;
    }
    console.log(state);
    return state;
  });

  return server;
}

module.exports = createServer;
