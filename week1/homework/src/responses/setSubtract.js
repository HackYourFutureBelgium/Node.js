'use strict';

const sendJson = require('./sendJson');

function setSubtract(response, state) {
  state--;
  sendJson(response, state);
  return state;
}

module.exports = setSubtract;
