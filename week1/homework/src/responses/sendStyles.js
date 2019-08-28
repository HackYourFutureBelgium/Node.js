'use strict';

function sendStyles(response) {
  response.setHeader('Content-Type', 'text/css');
  response.write(`
    body {
      background: #333333;
      color:      #DDDDDD;
      font-size: 1.5rem;
    }
  `);
}

module.exports = sendStyles;
