'use strict';

const sendJson = require('./sendJson');
function getState(response, state) {
  sendJson(response, state);
  return state;
}

module.exports = getState;
