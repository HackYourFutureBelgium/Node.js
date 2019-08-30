const urlEvaluation = require('./urlEvaluation');
const getStore = require('./getStore');
const sendIndexPage = require('./responses/sendIndexPage');
const sendError = require('./responses/sendError');
const sendStyles = require('./responses/sendStyles');

function handleRequest(request, response, state) {
  let operation = request.url.split('').filter(x => x !== '/').join(''); // operation: add, reset, state or subtract define in store.
  if (urlEvaluation(request).urlEnable) {
    if (urlEvaluation(request).urlRoot) {
      sendIndexPage(response);
    }
    else if (urlEvaluation(request).urlStyles) {
      sendStyles(response);
    }
    else {
      state = getStore(response, state)[operation]();
    }
  }
  else {
    sendError(response);
  }

  response.end();
  return state;
}

module.exports = handleRequest;
