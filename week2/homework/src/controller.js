/* eslint-disable max-len */
'use strict';

const fs = require('fs');

const path = require('path');

const chalk = require('chalk');

const storeFile = path.join(__dirname, 'store.txt');

function readAndWrite(filename, callback) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err;
    const parsed = JSON.parse(data);
    const todoListArray = parsed.todo;
    callback(todoListArray);
    const stringed = JSON.stringify(parsed);
    fs.writeFile(filename, stringed, (err) => {
      if (err) throw err;
    });
  });
}

function toList() {
  readAndWrite(storeFile, (todoList) => {
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
  readAndWrite(storeFile, (todoList) => {
    // add multiple item at a time
    args.forEach(element => {
      todoList.push(element);
      console.log(chalk.green(`      "${element}" added to the list`));
    });
  });
}

function toRemove(arg) {
  readAndWrite(storeFile, (todoList) => {
    const index = Number(arg);
    if (!index) { // check if the index is a number
      console.log(chalk.red(`      Invalid command: index must be a Number greater than zero `));
    }
    else {
      if (index > todoList.length) { // check if it is in the list
        console.log(chalk.red(`      the item you are trying to remove is not in the list`));
      }
      else {
        console.log(chalk.green(`      "${todoList[index - 1]}" is removed from the list`));
        todoList.splice(index - 1, 1);
      };
    }
  });
}

function toUpdate(arg1, arg2) {
  readAndWrite(storeFile, (todoList) => {
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
        console.log(chalk.green(`"${todoList[index - 1]}" is updated by "${arg2}"`));
        todoList.splice(index - 1, 1, arg2);
      }
    }
  });
}

function toReset() {
  readAndWrite(storeFile, (todoList) => {
    todoList.splice(0, todoList.length);
    console.log(chalk.green(`      list reseated`));
  });
}

module.exports = {
  readAndWrite,
  toList,
  toAdd,
  toRemove,
  toUpdate,
  toReset
};
