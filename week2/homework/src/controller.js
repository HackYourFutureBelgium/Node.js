'use strict';
const fs = require('fs');

function readAndWrite(directory, callback) {
  fs.readFile(directory, 'utf8', (err, data) => {
    if (err) throw err;
    const parsed = JSON.parse(data);
    const todoListArray = parsed.todo;
    callback(todoListArray);
    const stringed = JSON.stringify(parsed);
    fs.writeFile(directory, stringed, (err) => {
      if (err) throw err;
    });
  });
}

function toList() {
  readAndWrite('./store.txt', (todoList) => {
    if (todoList.length === 0) {
      console.log(`Your list is Empty`);
    }
    for (let i = 0; i < todoList.length; i++) {
      console.log(`${i + 1}. ${todoList[i]}`);
    }
  });
}

function toAdd(cmd) {
  readAndWrite('./store.txt', (todoList) => {
    todoList.push(`${cmd}`);
    console.log(`${cmd} is added to the list`);
  });
}

function toRemove(cmd) {
  readAndWrite('./store.txt', (todoList) => {
    if (cmd > todoList.length) {
      console.log(`the item you are trying to remove is not in the list`);
    }
    else {
      todoList.splice(cmd - 1, 1);
      console.log(`selected index item is removed from the list`);
    }
  });
}

function toUpdate(com1, com2) {
  readAndWrite('./store.txt', (todoList) => {
    if (com1 > todoList.length) {
      console.log(`the item you are trying to update is not in the list`);
    }
    else {
      todoList.splice(com1 - 1, 1, com2);
      console.log(`list updated`);
    }
  });
}

function toReset() {
  readAndWrite('./store.txt', (todoList) => {
    todoList.splice(0, todoList.length);
    console.log(`list reseated`);
  });
}

function showUsage() {
  console.log(`
  Usage: HackYourFuture Node.js week2 to-do-app
  commands:   second Command               Third Command      
  list                                                         
  add         item to add  
  remove      index of the item to remove
  update      index of the item to update     item to update
  help        show this help text
`);
}

function showError() {
  console.log(`
  "${process.argv[2]}" is not a valid command:
  to see the valid commands type:
  <node index > or  <node index help >
  `);
}
module.exports = {
  readAndWrite,
  toList,
  toAdd,
  toRemove,
  toUpdate,
  toReset,
  showUsage,
  showError
};
