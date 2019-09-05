'use strict';

// TODO: Write the homework code in this file

const controller = require('./controller');
const show = require('./show');

const userArguments = process.argv.slice(2);
const command = userArguments[0];
const secondCommand = userArguments[1];
const thirdCommand = userArguments[2];

switch (command) {
  case 'list':
    controller.toList();
    break;
  case 'add':
    const activities = process.argv.slice(3);
    controller.toAdd(activities);
    break;
  case 'remove':
    controller.toRemove(secondCommand);
    break;
  case 'update':
    controller.toUpdate(secondCommand, thirdCommand);
    break;
  case 'reset':
    controller.toReset();
    break;
  case 'help':
  case undefined:
    show.usage();
    break;
  default:
    show.error();
    break;
}
