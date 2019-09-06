/* eslint-disable max-len */
'use strict';

const commadAllowed = ['h', 'he', 'hel', 'a', 'r', 'l', 're', 'u', 'help', 'add', 'remove', 'list', 'reset', 'update'];
const helpAliases = ['h', 'he', 'hel'];
const fileReader = require('./fileReader');
const fileWriter = require('./fileWriter');
const messages = require('./messages');

function checkIfFileExist() {
  if (!fileReader.existFile()) {
    fileWriter.createFile();
  }
}

function spellCheck(commad) {
  return !commadAllowed.includes(commad);
}

function helpAlias(alias) {
  return helpAliases.includes(alias) ? alias : null;
}

function add(informationToAdd) {
  const information = fileReader.read();
  const objToAdd = JSON.parse('{"activity":"' + informationToAdd + '"}');
  information.push(objToAdd);
  fileWriter.write(information);
  messages.addSuccess();
}

function remove(index) {
  const information = fileReader.read();
  if (messages.isAValidIndex(Number(index), information.length)) {
    let activityToRemove = information.splice((index - 1), 1);
    fileWriter.write(information);
    messages.removeSuccess(activityToRemove);
  }
}

function list() {
  const information = fileReader.read();
  messages.showList(information);
}

function reset() {
  let information = '';
  messages.resetAdvice();
  process.stdin.setEncoding('utf8');

  process.stdin.on('readable', () => {
    let inData = process.stdin.read();
    if (inData !== null) {
      let answerFromUser = inData.split('').splice(0, 3).join('');
      if (answerFromUser.lowerCase() === 'yes') {
        fileWriter.write(information);
        messages.resetSuccess();
      }
    }
  });
  ;
}

function update(index, newUpdatedActivity) {
  const information = fileReader.read();
  if (messages.isAValidIndex(Number(index), information.length)) {
    let oldActivity = information[index - 1].activity;
    information[index - 1].activity = newUpdatedActivity;
    fileWriter.write(information);
    messages.updateSuccess(oldActivity, newUpdatedActivity);
  }
}

module.exports = {
  spellCheck,
  helpAlias,
  add,
  remove,
  list,
  reset,
  update,
  checkIfFileExist
};
