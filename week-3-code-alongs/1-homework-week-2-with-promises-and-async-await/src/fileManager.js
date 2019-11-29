// using ('fs').promises means we get a promise when reading/writing a file
const fs = require('fs').promises;

/**
 * Tries to read the file with todos, parse it and give the contents in a promise.
 *
 * @returns {Promise}
 */
function readStore() {
  return fs.readFile('./store.json', 'utf8') // read the file with a promise
  .then((contents) => JSON.parse(contents))  // when the file is read we parse it
  .catch((err) => {                          // if the file couldn't be read, we catch the error
    if (err.code === 'ENOENT') return [];    // if the error is because the file doesn't exist we return an empty array
    else throw err;                          // otherwise something else happened and we throw the error again
  });
}

/**
 * Tries to serialize contents and write to file with todos.
 *
 * @returns {Promise}
 */
function writeStore(todos) {
  return fs.writeFile('./store.json', JSON.stringify(todos));
}

module.exports = { readStore, writeStore };