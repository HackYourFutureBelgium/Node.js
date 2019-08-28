'use strict';
const DEFAULT_STATE = 10;
const sendJson = require('./sendJson');
function setReset(response, session, id) {
  session[id] = DEFAULT_STATE;
  sendJson(response, session[id]);
}
module.exports = setReset;
