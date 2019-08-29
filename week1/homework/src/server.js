'use strict';

const http = require('http');
const handleRequest = require('./handleRequest');
function createServer() {
  const server = http.createServer(handleRequest);
  return server;
}

module.exports = {
  createServer
};
