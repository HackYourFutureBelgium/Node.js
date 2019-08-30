'use strict';

const {
  createServer
} = require('./server');
const PORT = 3000;
const server = createServer();

server.on('connection', function (sock) {
  console.log('Client connected from ' + sock.localAddress);
  server.getConnections(function (error, count) {
    console.log('Number of concurrent connections to the server : ' + count);
  });
  // Client address at time of connection ----^
});



server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
