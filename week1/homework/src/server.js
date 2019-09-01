'use strict';

const http = require('http');

function createServer(port) {
  let state = 10;
  let res = {};

  const server = http.createServer((request, response) => {
    switch (request.url) {
      case '/state':
<<<<<<< HEAD
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
=======
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
>>>>>>> 4096553e20400358582830b1be9d0181a0810996
    return state;
  });

  return server;
}

<<<<<<< HEAD
module.exports = {
  createServer,
};
=======
module.exports = { createServer };
>>>>>>> 4096553e20400358582830b1be9d0181a0810996
