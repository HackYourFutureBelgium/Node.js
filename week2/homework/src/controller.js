/* eslint-disable max-len */
'use strict';

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const storeFile = path.join(__dirname, 'store.json');

function readFile(filename, callback) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err;

    const parsed = JSON.parse(data);
    const todoListArray = parsed.todo;

    callback(todoListArray);
  });
}

function writeFile(filename, data, callback) {
  const todoWrapper = {
    todo: data
  };
  const stringifiedWrapper = JSON.stringify(todoWrapper);

  fs.writeFile(filename, stringifiedWrapper, (err) => {
    if (err) throw err;
    callback();
  });
}

function toList() {
  readFile(storeFile, (todoList) => {
    if (todoList.length === 0) { // check if the list is empty
      console.log(chalk.red(`      Your list is Empty please add some items`));
    }
    else {
      console.log(chalk.green('Your todo activity'));
      for (let i = 0; i < todoList.length; i++) {
        console.log(chalk.yellow(`      ${i + 1}. ${todoList[i]}`));
      };
    }
  });
}

function toAdd(args) {
  readFile(storeFile, (todoList) => {
    // add multiple item at a time
    args.forEach(element => {
      todoList.push(element);
      console.log(chalk.green(`      "${element}" added to the list`));
    });

    writeFile(storeFile, todoList, () => { });
  });
}

function toRemove(arg) {
  readFile(storeFile, (todoList) => {
    const index = Number(arg);

    // check if the index is a number
    if (!index) {
      console.log(chalk.red(`      Invalid command: index must be a Number greater than zero `));
    }

    else {
      // check if it is in the list
      if (index > todoList.length) {
        console.log(chalk.red(`      the item you are trying to remove is not in the list`));
      }

      else {
        console.log(chalk.green(`     "${todoList[index - 1]}" is removed from the list`));
        todoList.splice(index - 1, 1);
      };

      writeFile(storeFile, todoList, () => { });
    }
  });
}

function toUpdate(arg1, arg2) {
  readFile(storeFile, (todoList) => {
    const index = Number(arg1);

    // check if index is a number and the second argument is valid
    if (!index || !arg2) {
      console.log(chalk.red(`      Invalid command! Index must be a number or invalid update `));
    }

    else {
      if (index > todoList.length) { // check if it is from the list
        console.log(chalk.red(`      the item you are trying to update is not in the list`));
      }

      else {
        todoList.splice(index - 1, 1, arg2);
        console.log(chalk.green(`"${todoList[index - 1]}" is updated by "${arg2}"`));
      }
    }

    writeFile(storeFile, todoList, () => { });
  });
}

function toReset() {
  readFile(storeFile, (todoList) => {
    todoList.splice(0, todoList.length);
    console.log(chalk.green(`      list reseated`));

    writeFile(storeFile, todoList, () => { });
  });
}

module.exports = {
  readFile,
  writeFile,
  toList,
  toAdd,
  toRemove,
  toUpdate,
  toReset
};
