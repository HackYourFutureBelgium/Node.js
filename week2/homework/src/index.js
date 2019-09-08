/* eslint-disable no-unused-vars */
'use strict';

// TODO: Write the homework code in this file

const fs = require('fs');
const myArgList = process.argv;
const myCommand = myArgList[2];
const myFirstItem = myArgList[3];
const mySecondItem = myArgList[4];

switch (myCommand) {
  case undefined:
  case 'help':
    funcHelp();
    break;
  case 'list':
    funcList();
    break;
  case 'add':
    funcAdd(myFirstItem);
    break;
  case 'remove':
    funcRemove(myFirstItem);
    break;
  case 'update':
    funcUpdate(myFirstItem, mySecondItem);
    break;
  case 'reset':
    funcReset();
    break;
  default:
    console.log('Please enter proper commands');
}

function funcHelp() {
  console.log(
    ' list:      Shows current to-dos, or shows an appropriate text if there are no to-dos',
  );
  console.log(
    ' add:       Adds a to-do item. All the words behind add are entered as 1 to-do item to the list',
  );
  console.log(' remove:    Removes a to-do item by its 1-base index, e.g. to remove second item');
  console.log(' update:    Updates a to-do item with new text');
  console.log(' reset:     Removes all to-do items from the list');
}
function funcList() {
  fs.readFile('./list.txt', 'utf8', function(err, data) {
    if (err) {
      throw err;
    }
    if (data !== '{"TO DO" : "0"}') {
      console.log(data);
    } else if (!data) {
      fs.writeFile('./list.txt', '{"TO DO" : "0"}', 'utf8', err => {
        if (err) throw err;
      });
      console.log('There are no to-do items');
    } else {
      console.log('There are no to-do items');
    }
  });
}
function funcAdd(item) {
  fs.readFile('./list.txt', 'utf8', function(err, data) {
    if (err) {
      throw err;
    }
    const parsed = JSON.parse(data);
    let itemAm = itemAmount();

    console.log(itemAm);
    parsed[`${parseInt(itemAm) + 1}`] = item;
    const asString = JSON.stringify(parsed);
    increaseItemAmount();

    fs.writeFile('./list.txt', asString, function(err) {
      if (err) {
        throw err;
      }
    });
  });
}

function funcReset() {
  fs.writeFile('./list.txt', '{"TO DO" : "0"}', err => {
    if (err) throw err;
    console.log('Removed');
  });
}

function funcUpdate(index, item) {
  fs.readFile('./list.txt', 'utf8', function(err, data) {
    if (err) {
      throw err;
    }

    const parsed = JSON.parse(data);
    parsed[`${index}`] = item;
    const asString = JSON.stringify(parsed);

    fs.writeFile('./list.txt', asString, function(err) {
      if (err) {
        throw err;
      }

      console.log(asString);
    });
  });
}

function funcRemove(index) {
  fs.readFile('./list.txt', 'utf8', function(err, data) {
    if (err) {
      throw err;
    }

    const parsed = JSON.parse(data);
    delete parsed[`${index}`];

    const asString = JSON.stringify(parsed);

    fs.writeFile('./list.txt', asString, function(err) {
      if (err) {
        throw err;
      }

      console.log(asString);
    });
  });
}

async function itemAmount() {
  let myAmount = fs.readFile('./list.txt', 'utf8', function(err, data) {
    if (err) {
      throw err;
    }
    const parsed = JSON.parse(data);
    let amount = parsed['TO DO'];
    return amount;
  });
  let result = await myAmount;
  return result;
}

function increaseItemAmount() {
  fs.readFile('./list.txt', 'utf8', function(err, data) {
    if (err) {
      throw err;
    }
    const parsed = JSON.parse(data);
    parsed['TO DO'] = JSON.stringify(parseInt(parsed['TO DO']) + 1);
    const asString = JSON.stringify(parsed);

    fs.writeFile('./list.txt', asString, function(err) {
      if (err) {
        throw err;
      }

      console.log(asString);
    });
  });
}
