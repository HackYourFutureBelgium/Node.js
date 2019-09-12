/* eslint-disable no-unused-vars */
'use strict';

// TODO: Write the homework code in this file

const func = require('./fsFunctions.js');

const args = process.argv;
const usableArgs = args.slice(2);
const command = usableArgs[0];
const commandSecond = usableArgs[1];
const commandThird = usableArgs[2];

console.log(usableArgs);

if (usableArgs.length < 1) {
  throw new Error('Please enter an argument');
}

switch (command) {
  case undefined:
  case 'help':
    help();
    break;
  case 'list':
    func.list();
    break;
  case 'add':
    if (commandSecond) {
      func.add(commandSecond);
    } else {
      console.log('Please add a to-do to add');
    }
    break;
  case 'remove':
    if (commandSecond) {
      func.remove(commandSecond);
    } else {
      console.log('Please add a to-do to remove');
    }
    break;
  case 'update':
    if (commandSecond && commandThird) {
      func.update(commandSecond, commandThird);
    } else {
      console.log('Please add an index and a new to-do respectively to update');
    }
    break;
  case 'reset':
    func.reset();
    break;
  default:
    console.log('Please enter proper commands. Enter "help" for more information');
}

function help() {
  console.log('WRITE THIS PART');
}
