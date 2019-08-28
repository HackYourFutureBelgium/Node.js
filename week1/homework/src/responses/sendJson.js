'use strict';

function sendJson(response, state) {
  response.setHeader('Content-Type', 'application/json');
  response.write(`{ 
                   "state": ${state} 
  }`);
}
module.exports = sendJson;
