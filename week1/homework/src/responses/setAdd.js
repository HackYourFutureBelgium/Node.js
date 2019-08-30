'use strict';

const sendJson = require('./sendJson');

function setAdd(response, state) {
  state += 1;
  sendJson(response, state);
  return state;
}

module.exports = setAdd;
