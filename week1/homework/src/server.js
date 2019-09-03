'use strict';
const http = require('http');
const handleRequest = require('./handleRequest');
function createServer() {
  let state = 10;
  const server = http.createServer((request, response) => {
    state = handleRequest(request, response, state);
  });
  return server;
}

module.exports = {
  createServer
};
