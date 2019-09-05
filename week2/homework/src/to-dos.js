'use strict';

let stored = require('./store.json');
//console.log(typeof stored, stored);

//console.log(JSON.stringify(stored)); //string
let length = Object.keys(stored).length;
//console.log('length', length);

const fs = require('fs');

const coms = {
  help: 'Lists all the commands and descriptions',
  list: 'Shows current to-do list',
  add: 'Adds a to-do item. E.g. node index.js add "Buy groceries"',
  remove:
    'Removes a to-do item by its 1-base index. E.g. node index.js remove 2 (removes second item)',
  update: 'Updates a to-do item with new text. E.g. node index.js update 3 "Brush teeth"',
  reset: 'Removes all to-do items from the list',
};

function helpEmpty() {
  //when there is no command after node index.js

  console.log('Please enter one of the following commands' + '\n', coms);
}

function help() {
  console.log('Commands you can use and their descriptions:' + '\n', coms);
}

function readList() {
  fs.readFile('./store.json', 'utf8', function(err, data) {
    if (err) {
      throw err;
    }

    console.log('Todo list: ', data);
  });
}

function write() {
  const added = JSON.stringify(stored);

  fs.writeFile('./store.json', added, function(err) {
    if (err) throw err;
  });
}

function add(argument) {
  if (stored['0']) {
    delete stored['0'];
    stored[length] = argument;
  } else {
    length++;
    stored[length] = argument;
  }

  write();
}

function remove(argument) {
  const num = Number(argument);
  if (typeof num === 'number') {
    delete stored[argument];
    const bigger = num + 1;
    console.log(typeof stored[bigger], stored[bigger]);
    if (stored[bigger]) {
      //if there are list items which have bigger index than the removed item, we should re-arrange the indexes:
      for (let i = bigger; i <= length; i++) {
        const j = i - 1;
        stored[j] = stored[i];
        delete stored[i];
      }
    }

    if (length === 0) {
      stored['0'] = 'Create your todo list';
    }

    write();
  } else if (num > length || num < 1 || !stored[argument]) {
    console.log(
      "The item you want to remove doesn't exist. Please enter an index of an existing list item!",
    );
  } else if (typeof num !== 'number') {
    console.log('Please enter an index number of a list item!');
  }
}

function update(arg, newText) {
  const num = Number(arg);
  const numb = Number(newText);
  if (
    stored[num] &&
    typeof num === 'number' &&
    isNaN(numb) === true &&
    typeof newText === 'string' &&
    newText !== 'true' &&
    newText !== 'false'
  ) {
    stored[num] = newText;

    write();
    console.log('It is updated');
  } else if (num > length || num < 1 || !stored[num]) {
    console.log(
      'The number you entered is wrong. Please enter an index of an existing list item and the text to update!',
    );
  } else if (typeof num !== 'number') {
    console.log('Please enter an index number of a list item!');
  } else if (
    typeof newText !== 'string' ||
    isNaN(numb) === false ||
    newText === 'true' ||
    newText === 'false'
  ) {
    console.log('Please enter a string to update the list item with');
  }
}

function reset() {
  stored = new Object();
  stored['0'] = 'Create your todo list';
  write();
}

module.exports = { helpEmpty, help, readList, add, remove, update, reset };
