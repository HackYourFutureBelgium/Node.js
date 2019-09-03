'use strict';

// TODO: Write the homework code in this file

const controller = require('./controller');

const userArguments = process.argv.slice(2);
const command = userArguments[0];
const secondCommand = userArguments[1];
const thirdCommand = userArguments[2];

if (command === 'list') {
  controller.toList();
}
else if (command === 'add') {
  controller.toAdd(secondCommand);
}
else if (command === 'remove') {
  controller.toRemove(secondCommand);
}
else if (command === 'update') {
  controller.toUpdate(secondCommand, thirdCommand);
}
else if (command === 'reset') {
  controller.toReset();
}
else if (command === 'help' || command === undefined || command === '.') {
  controller.showUsage();
}
else {
  controller.showError();
}
