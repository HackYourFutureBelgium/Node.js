/* eslint-disable max-len */
'use strict';
function urlEvaluation(request) {
  const resUrl = request.url;
  return {
    callback: resUrl.split('').filter(x => x !== '/').join(''),
    urlRoot: resUrl === '/',
    urlStyles: resUrl === '/styles.css',
    urlEnable: resUrl === '/' || resUrl === '/state' || resUrl === '/add' || resUrl === '/subtract' || resUrl === '/reset' || resUrl === '/styles.css'
  };
}
module.exports = urlEvaluation;
