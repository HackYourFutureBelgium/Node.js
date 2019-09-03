'use strict';

// TODO: Write the homework code in this file
const fs = require('fs');

const userArguments = process.argv.slice(2);
const command = userArguments[0];
const secondCommand = userArguments[1];
const thirdCommand = userArguments[2];

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

if (command === 'list') {
  readAndWrite('./store.txt', (todoList) => {
    if (todoList.length === 0) {
      console.log(`Your list is Empty`);
    }
    for (let i = 0; i < todoList.length; i++) {
      console.log(`${i + 1}. ${todoList[i]}`);
    }
  });
}
else if (command === 'add') {
  readAndWrite('./store.txt', (todoList) => {
    todoList.push(`${secondCommand}`);
    console.log(`${secondCommand} is added to the list`);
  });
}
else if (command === 'remove') {
  readAndWrite('./store.txt', (todoList) => {
    todoList.splice(secondCommand - 1, 1);
    console.log(`the item is removed from the list`);
  });
}
else if (command === 'update') {
  readAndWrite('./store.txt', (todoList) => {
    if (secondCommand > todoList.length) {
      console.log(`the item you are trying to update is not in the list`);
    }
    else {
      todoList.splice(secondCommand - 1, 1, thirdCommand);
      console.log(`list updated`);
    }
  });
}
else if (command === 'reset') {
  readAndWrite('./store.txt', (todoList) => {
    todoList.splice(0, todoList.length);
    console.log(`list reseated`);
  });
}
else if (command === 'help' || command === undefined || command === '.') {
  showUsage();
}
else {
  showError();
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
  "${command}" is not a valid command:
  to see the valid commands type:
  <node index > or  <node index help >
  `);
}
