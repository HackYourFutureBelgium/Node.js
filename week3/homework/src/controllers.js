'use strict';

const fs = require('fs');
const ENCODING = 'utf8';

function readTodoFile (filename, callback) {
  fs.readFile(filename, ENCODING, (err, data) => {
    if (err) throw err;

    const parsed = JSON.parse(data);
    const todoListArray = parsed.todo;

    callback(todoListArray);
  });
}

function writeTodoFile(filename, data, callback) {
  const todoWrapper = {
    todo: data
  };
  const stringifiedWrapper = JSON.stringify(todoWrapper);

  fs.writeFile(filename, stringifiedWrapper, (err) => {
    if (err) throw err;
    callback();
  });
}

module.exports = {
  readTodoFile,
  writeTodoFile
}