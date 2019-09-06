'use strict';

const http = require('http');

/* `createServer` MUST return an instance of `http.Server` otherwise the tests
 * will fail.
 */
function createServer() {
  const DEFAULT_STATE = 10;
  let state = DEFAULT_STATE;

  const server = http.createServer((request, response) => {
  let url = request.url;
  response.setHeader('Content-type','application/json');
  
  switch(url){
   case '/state': response.write(JSON.stringify(getJson(state)));
                  break
   case '/add':  state += 1;
                 response.write(JSON.stringify(getJson(state)));
                 break
   case '/subtract': state -= 1;
                     response.write(JSON.stringify(getJson(state)));
                     break
  case '/reset':    state = DEFAULT_STATE;
                    response.write(JSON.stringify(getJson(state)));
                    break
   default :  response.statusCode = 404;  
              response.write(JSON.stringify(getJson(state,"Not found")));
  }

response.end();
  });
  return server;
}

function getJson(state, message){
  let objJson = {};
    if(message){
    objJson = {"error": message}; 
    } else {
     objJson = {"state": state};
    }
  return objJson
}
module.exports = {
  createServer
};
