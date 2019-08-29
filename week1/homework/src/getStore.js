'use strict';

const setAdd = require('./responses/setAdd');
const setSubtract = require('./responses/setSubtract');
const setReset = require('./responses/setReset');
const getState = require('./responses/getState');

function getStore(response, session, id) {
  return {
    add: () => { setAdd(response, session, id); },
    subtract: () => { setSubtract(response, session, id); },
    reset: () => { setReset(response, session, id); },
    state: () => { getState(response, session, id); }
  };
}

module.exports = getStore;
