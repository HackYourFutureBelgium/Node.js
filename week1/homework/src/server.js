'use strict';
const http = require('http');

/* `createServer` MUST return an instance of `http.Server` otherwise the tests
 * will fail.
 */

function createServer(port) {
  let state = 10;

  const server = http.createServer((request, response) => {
    // TODO: Write your homework code here

    // for reference: https://www.w3schools.com/nodejs/nodejs_http.asp
    /* var http = require('http');
       http.createServer(function (req, res) {
       res.writeHead(200, {'Content-Type': 'text/html'});
       res.write('Hello World!');
       res.end();
       }).listen(8080);
    */

    const url = request.url; // declare url as a variable to use later
    console.log(url);
    let resMessage = {};

    if (url === `/add`) {
      state++;
    }
 else if (url === `/subtract`) {
      state--;
    }
 else if (url === `/reset`) {
      state = 10;
    }

    if (url === `/state` || url === `/add` || url === `/subtract` || url === `/reset`) {
      response.writeHead(200, { 'Content-Type': 'application/json' }); // response.writeHead(statusCode[, statusMessage][, headers])
      resMessage = {
        state
      };
    }
 else {
      response.writeHead(404, { 'Content-Type': 'application/json' });
      resMessage = {
        error: 'Not found'
      };
    }

    response.write(JSON.stringify(resMessage)); // transform the response to JSON string and .write() method  sends a chunk of the response body.
    response.end(); // Always .end() the response!
  });
  return server;
}

module.exports = {
  createServer
};

/* test result:
  > ava --verbose
    √ /state returns 10
  √ /add returns 11
  √ /subtract returns 9
  √ /reset returns 10
  √ querying undefined URL returns 404 Not Found
  √ /add, /reset returns 10
  √ /subtract, /reset returns 10
  √ /add, /add, /state, /add, /subtract returns 12
  √ /subtract, /subtract, /reset, /add, /state, /subtract, /add returns 11 (104ms)
  √ /add, /add, /add, /add, /add, /add, /add, /add, /add, /add, /state returns 20 (119ms)
  √ /subtract, /subtract, /subtract, /subtract, /subtract, /subtract, /subtract, /subtract, /subtract, /subtract, /state returns 0 (120ms)

  11 tests passed

*/
