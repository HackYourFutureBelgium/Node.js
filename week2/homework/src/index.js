'use strict';

// TODO: Write the homework code in this file
const fs = require('fs');

const userArguments = process.argv.slice(2);
const command = userArguments[0];
const secondCommand = userArguments[1];
const thirdCommand = userArguments[2];
console.log(command);
console.log(secondCommand);
if (command === 'list') {
  fs.readFile('./store.txt', 'utf8', (_err, data) => {
    if (_err) throw _err;
    console.log(data);
    const parsed = JSON.parse(data);
    const todoList = parsed.todo;
    if (todoList.length === 0) {
      console.log(`Your list is Empty`)
    }
    for (let i = 0; i < todoList.length; i++) {
      console.log(`${i + 1}. ${todoList[i]}`);
    }
  });
}
else if (command === 'add') {
  fs.readFile('./store.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    const parsed = JSON.parse(data);
    const todoList = parsed.todo;
    todoList.push(`${secondCommand}`);
    const stringed = JSON.stringify(parsed);
    fs.writeFile('./store.txt', stringed, (err) => {
      if (err) throw err;
    });
  });
}
else if (command === 'remove') {
  fs.readFile('./store.txt', 'utf8', (err, data) => {
    if (err) throw err;
    const parsed = JSON.parse(data);
    const todoList = parsed.todo;
    todoList.splice(secondCommand - 1, 1);
    const stringed = JSON.stringify(parsed);
    fs.writeFile('./store.txt', stringed, (err) => {
      if (err) throw err;
    });
  });
}

else if (command === 'update') {
  fs.readFile('./store.txt', 'utf8', (err, data) => {
    if (err) throw err;
    const parsed = JSON.parse(data);
    const todoList = parsed.todo;
    todoList.splice(secondCommand - 1, 1, thirdCommand);
    const stringed = JSON.stringify(parsed);
    fs.writeFile('./store.txt', stringed, (err) => {
      if (err) throw err;
    });
  });
}
else if (command === 'reset') {
  fs.readFile('./store.txt', 'utf8', (err, data) => {
    if (err) throw err;
    const parsed = JSON.parse(data);
    const todoList = parsed.todo;
    todoList.splice(0, todoList.length);
    const stringed = JSON.stringify(parsed);
    fs.writeFile('./store.txt', stringed, (err) => {
      if (err) throw err;
    });
  });
}
else if (command === 'help' || command === undefined || command === '.') {
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
else {
  console.log(`
  "${command}" is not a valid command
  type help to see the valid options
  `);
}
