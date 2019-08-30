'use strict';

const DEFAULT_STATE = 10;
const sendJson = require('./sendJson');

function setReset(response, state) {
  state = DEFAULT_STATE;
  sendJson(response, state);
  return state;
}

module.exports = setReset;
