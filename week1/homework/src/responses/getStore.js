'use strict';

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
  sendJson(response, state);
  return state;
}

function setSubtract(response, state) {
  state--;
  sendJson(response, state);
  return state;
}

function setReset(response, state) {
  state = DEFAULT_STATE;
  sendJson(response, state);
  return state;
}

function getState(response, state) {
  sendJson(response, state);
  return state;
}

function sendJson(response, state) {
  const resultToUser = {
    'state': state
  };

  response.setHeader('Content-Type', 'application/json');
  response.write(JSON.stringify(resultToUser));
}
module.exports = getStore;
