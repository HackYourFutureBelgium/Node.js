'use strict';

const http = require('http');


function createServer(port) {
	let state = 10;
 
  function responde(response, statusCode, message){
  		response.writeHead(200, {'Content-Type': 'application/json'});
			response.write(JSON.stringify({message}));
			response.end();
 }

	const server = http.createServer((request, response) => {
		const url = request.url;
		
		if (url === "/state") {
		   respond(response,200,{state}); 
		} else if (url === "/add") {
			state++;
      respond(response,200,{state});
		} else if (url === "/subtract") {
			state--;
			respond(response,200,{state});
		} else if (url === "/reset") {
			state = 10;
			 respond(response,200,{state});
		} else {
			 respond(response,404,{error: 'Not found'});
		}
	});

	return server;
}

module.exports = {
  createServer
};
