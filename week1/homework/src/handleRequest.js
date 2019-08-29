'use strict';

const DEFAULT_STATE = 10;
const urlEvaluation = require('./urlEvaluation');
const getStore = require('./getStore');
const sendIndexPage = require('./responses/sendIndexPage');
const sendError = require('./responses/sendError');
const sendStyles = require('./responses/sendStyles');
let session = {};

function handleRequest(request, response) {

  // I tried to avoid the error when you have two o more conexions in the
  // same port, I created an id to identificate each conexion keeping
  // the value status in a session object.

  let id = request.headers.host + request.headers['user-agent'];
  let operation = request.url.split('').filter(x => x !== '/').join(''); // operation: add, reset, state or subtract define in store.

  if (session[id] === undefined) {
    session[id] = DEFAULT_STATE;
  }

  if (urlEvaluation(request).urlEnable) {
    if (urlEvaluation(request).urlRoot) {
      sendIndexPage(response)
    } else if (urlEvaluation(request).urlStyles) {
      sendStyles(response)
    } else {
      getStore(response, session, id)[operation]()
    }
  } else {
    sendError(response);
  }

  response.end();
}

module.exports = handleRequest;
