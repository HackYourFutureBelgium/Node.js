'use strict';

const http = require('http');

/* `createServer` MUST return an instance of `http.Server` otherwise the tests
 * will fail.
 */
function createServer(port) {
let state = 10;

const server = http.createServer((request, response) => {
 // TODO: Write your homework code here

function createServer(port) {

let state = 10;

const server = http.createServer((request, response) => {

 const url = request.url;

  if (url === "/state") {

  response.writeHead(200, { 'Content-Type': 'application/json' });

  response.write(JSON.stringify({ state }));
  response.end();
 } else if (url === "/add") {
  state++;
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify({ state }));
  response.end();
  } else if (url === "/subtract") {
  state--;
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify({ state }));
  response.end();
  } else if (url === "/reset") {

  state = 10;

  response.writeHead(200, { 'Content-Type': 'application/json' });

  response.write(JSON.stringify({ state }));

  response.end();

 } else {

 response.writeHead(404, { 'Content-Type': 'application/json' });

 response.write(JSON.stringify({ error: 'Not found' }));

 response.end();

    }

});
 return server;

    }

 module.exports = {

      createServer

 };
