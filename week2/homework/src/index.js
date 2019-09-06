'use strict';

// TODO: Write the homework code in this file

const commands = require("./commands");

const usableArgs = process.argv.slice(2);
let command = usableArgs[0];
let item = usableArgs[1];
let item2 = usableArgs[2];



switch (command) {
  case 'help':
      commands.help();
      break;
  case 'list':
      commands.list()
      break;
  case 'add':
      commands.add(item);
      break;
  case 'remove':
      commands.remove(item);
      break;
  case 'update':
      commands.update(item, item2);
      break;
  case 'reset':
      commands.reset();
      break;
  default:
      console.log(" Please use Usable Commands ");
      commands.help();
}
/*
if (command === "help") {
  commands.help();
} else if (command === "list") {
  commands.list();
} else if (command === "add") {
  commands.add(item);
} else if (command === "remove") {
  commands.remove(item);
} else if (command === "update") {
  commands.remove(item, item2);
} else if (command === "reset") {
  commands.reset();
} else {
  console.log("ok, this doesnt make any sense");
  commands.help();
}
*/
