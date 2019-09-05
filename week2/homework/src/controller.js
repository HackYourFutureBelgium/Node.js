/* eslint-disable max-len */
'use strict';
const fs = require('fs');
const path = require('path');
function readAndWrite(directory, callback) {
  const dynamicPath = path.join(__dirname, directory);
  fs.readFile(dynamicPath, 'utf8', (err, data) => {
    if (err) throw err;
    const parsed = JSON.parse(data);
    const todoListArray = parsed.todo;
    callback(todoListArray);
    const stringed = JSON.stringify(parsed);
    fs.writeFile(dynamicPath, stringed, (err) => {
      if (err) throw err;
    });
  });
}

function toList() {
  readAndWrite(`/store.txt`, (todoList) => {
    if (todoList.length === 0) { // check if the list is empty
      console.log(`      Your list is Empty please add some items`);
    }
    else {
      console.log('Your todo activity');
      for (let i = 0; i < todoList.length; i++) {
        console.log(`      ${i + 1}. ${todoList[i]}`);
      };
    }
  });
}

function toAdd(args) {
  readAndWrite('/store.txt', (todoList) => {
    // add one item at a time
    args.forEach(element => {
      todoList.push(element);
      console.log(`      "${element}" added to the list`);
    });
  });
}

function toRemove(arg) {
  readAndWrite('/store.txt', (todoList) => {
    const index = Number(arg);
    if (!index) { // check if the index is a number
      console.log(`      Invalid command: index must be a Number greater than zero `);
    }
    else {
      if (index > todoList.length) { // check if it is in the list
        console.log(`      the item you are trying to remove is not in the list`);
      }
      else {
        console.log(`      "${todoList[index - 1]}" is removed from the list`);
        todoList.splice(index - 1, 1);
      };
    }
  });
}

function toUpdate(arg1, arg2) {
  readAndWrite('/store.txt', (todoList) => {
    const index = Number(arg1);
    // check if index is a number and the second argument is valid
    if (!index || !arg2) {
      console.log(`      Invalid command! Index must be a number or invalid update `);
    }
    else {
      if (index > todoList.length) { // check if it is from the list
        console.log(`      the item you are trying to update is not in the list`);
      }
      else {
        console.log(`"${todoList[index - 1]}" is updated by "${arg2}"`);
        todoList.splice(index - 1, 1, arg2);
      }
    }
  });
}

function toReset() {
  readAndWrite('/store.txt', (todoList) => {
    todoList.splice(0, todoList.length);
    console.log(`      list reseated`);
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
