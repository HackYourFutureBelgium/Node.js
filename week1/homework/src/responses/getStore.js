'use strict';
const sendResponse = require('./sendResponse');
const DEFAULT_STATE = 10;

function getStore(response, state) {
  return {
    add: () => { return setAdd(response, state); },
    subtract: () => { return setSubtract(response, state); },
    reset: () => { return setReset(response, state); },
    state: () => { return getState(response, state); }
  };
}

function setAdd(response, state) {
  state += 1;
  sendResponse.sendJson(response, state);
  return state;
}

function setSubtract(response, state) {
  state--;
  sendResponse.sendJson(response, state);
  return state;
}

function setReset(response, state) {
  state = DEFAULT_STATE;
  sendResponse.sendJson(response, state);
  return state;
}

function getState(response, state) {
  sendResponse.sendJson(response, state);
  return state;
}

module.exports = getStore;
