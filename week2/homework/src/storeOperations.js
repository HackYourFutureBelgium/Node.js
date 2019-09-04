/* eslint-disable max-len */
'use strict';

const commadAllowed = ['h', 'he', 'hel', 'a', 'ad', 'r', 'rem', 'remo', 'remov', 'l', 'li', 'lis', 're', 'res', 'rese',
  'u', 'up', 'upd', 'upda', 'updat', 'help', 'add', 'remove', 'list', 'reset', 'update'];
const readFile = require('./readFile');
const writeFile = require('./writeFile');
const messages = require('./messages');

function checkCommand(commad) {
  if (!commadAllowed.includes(commad)) {
    console.log('\x1b[31m');
    console.log('Whoops!, Please Digit a valid commad. Use \'help\' command to get more info.');
    console.log('\x1b[0m');
    process.exit();
  }
}

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
    let inData = process.stdin.read();
    if (inData !== null) {
      let answerFromUser = inData.split('').splice(0, 3).join('');
      if (answerFromUser === 'YES' || answerFromUser === 'yes') {
        writeFile.write(information);
        messages.resetSuccess();
      }
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
  checkCommand,
  add,
  remove,
  list,
  reset,
  update,
  checkIfFileExist
};
