'use strict';

// TODO: Write the homework code in this file

// console.log('run');

const todos = require('./to-dos.js');

const fs = require('fs');

const args = process.argv; // array
/*
args.forEach((val, index) => {
  switch (true) {
    case index >= 2:
      console.log(`${index}: ${val}`);
  }
}); */

const usableArgs = args.slice(2); // to get the usable arguments only

// console.log('Usable Arguments: ', usableArgs);

(() => {
  if (usableArgs.length < 1) {
    todos.helpEmpty();
    return; // return not to have conflict with default case on switch
  }

  const command = usableArgs[0];
  const arg = usableArgs[1];
  const newText = usableArgs[2];

  switch (command) {
    case 'help':
      todos.help();
      break;

    case 'list':
      todos.readList();
      break;

    case 'add':
      todos.add(arg);
      todos.readList();

      break;

    case 'remove':
      todos.remove(arg);
      todos.readList();

      break;

    case 'update':
      todos.update(arg, newText);
      todos.readList();

      break;

    case 'reset':
      todos.reset();
      todos.readList();

      break;

    default:
      throw new Error("You didn't enter any command that is supported");
  }
})();
