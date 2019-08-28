'use strict';
const sendJson = require('./sendJson');
function setSubtract(response, session, id) {
  session[id]--;
  sendJson(response, session[id]);
}
module.exports = setSubtract;
