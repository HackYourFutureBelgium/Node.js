'use strict';
const sendJson = require('./sendJson');
function setAdd(response, session, id) {
  session[id] += 1;
  sendJson(response, session[id]);
}
module.exports = setAdd;
