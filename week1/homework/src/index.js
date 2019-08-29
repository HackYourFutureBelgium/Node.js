'use strict';

const {
  createServer
} = require('./server');
const PORT = 3000;
const server = createServer();

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
