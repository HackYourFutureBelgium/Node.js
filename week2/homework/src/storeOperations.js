/* eslint-disable max-len */
'use strict';

const readFile = require('./readFile');
const writeFile = require('./writeFile');
const messages = require('./messages');

function add(informationToAdd) {
  let information = readFile.read();
  let objToAdd = JSON.parse('{"activity":"' + informationToAdd + '"}');
  information.push(objToAdd);
  writeFile.write(information);
  messages.addSuccess();
}

function remove(index) {
  let information = readFile.read();
  if (messages.isAValidIndex(Number(index), information.length)) {
    let activityToRemove = information.splice((index - 1), 1);
    writeFile.write(information);
    messages.removeSuccess(activityToRemove);
  }
}

function list() {
  let information = readFile.read();
  messages.showList(information);
}

function reset() {
  let information = '';
  messages.resetAdvice();
  process.stdin.setEncoding('utf8');

  process.stdin.on('readable', () => {
    let answerFromUser = process.stdin.read().split('').splice(0, 3).join('');
    if (answerFromUser === 'YES' || answerFromUser === 'yes') {
      writeFile.write(information);
      messages.resetSuccess();
    }
  });
  ;
}

function update(index, newUpdatedActivity) {
  let information = readFile.read();
  if (messages.isAValidIndex(Number(index), information.length)) {
    let oldActivity = information[index - 1].activity;
    information[index - 1].activity = newUpdatedActivity;
    writeFile.write(information);
    messages.updateSuccess(oldActivity, newUpdatedActivity);
  }
}

function checkIfFileExist() {
  if (!readFile.existFile()) {
    writeFile.createFile();
  }
}

module.exports = {
  add,
  remove,
  list,
  reset,
  update,
  checkIfFileExist
};
