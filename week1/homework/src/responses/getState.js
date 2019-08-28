'use strict';
const sendJson = require('./sendJson');
function getState(response, session, id) {
  sendJson(response, session[id]);
}
module.exports = getState;
