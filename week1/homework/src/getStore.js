'use strict';

const setAdd = require('./responses/setAdd');
const setSubtract = require('./responses/setSubtract');
const setReset = require('./responses/setReset');
const getState = require('./responses/getState');

function getStore(response, state) {
  return {
    add: () => { return setAdd(response, state); },
    subtract: () => { return setSubtract(response, state); },
    reset: () => { return setReset(response, state); },
    state: () => { return getState(response, state); }
  };
}

module.exports = getStore;
