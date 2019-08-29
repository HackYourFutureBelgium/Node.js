/* eslint-disable max-len */
'use strict';

function urlEvaluation(request) {

  const url = request.url;
  const supportedUrls = [
    '/',
    '/state',
    '/add',
    '/subtract',
    '/reset',
    '/styles.css'
  ];

  return {
    urlRoot: url === '/',
    urlStyles: url === '/styles.css',
    urlEnable: supportedUrls.includes(url)
  };
}

module.exports = urlEvaluation;
