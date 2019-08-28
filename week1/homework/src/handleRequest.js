'use strict';
const DEFAULT_STATE = 10;
const urlEvaluation = require('./urlEvaluation');
const getProcess = require('./getProcess');
const sendIndexPage = require('./responses/sendIndexPage');
const sendError = require('./responses/sendError');
const sendStyles = require('./responses/sendStyles');
let session = {};

function handleRequest(request, response) {
  // I tried to avoid the error when you have two o more conexions in the
  // same port, I created an id to identificate each conexion keeping
  // the value status in a session object.
  let id = request.headers.host + request.headers['user-agent'];
  let callback = urlEvaluation(request).callback;
  if (session[id] === undefined) session[id] = DEFAULT_STATE;
  urlEvaluation(request).urlEnable
    ? urlEvaluation(request).urlRoot
      ? sendIndexPage(response) : urlEvaluation(request).urlStyles
        ? sendStyles(response) : getProcess(response, session, id)[callback]()
    : sendError(response);
  response.end();
}
module.exports = handleRequest;
