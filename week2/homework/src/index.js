/* eslint-disable max-len */
'use strict';

const TODO_LIST = require('commander');
const messages = require('./messages');
const storeOperations = require('./storeOperations');
const aliases = require('./aliases');
const COMMAND = process.argv.slice(2)[0];
const NO_COMMANDS_ALLOW = process.argv.slice(2).length;

storeOperations.checkCommand(COMMAND);
storeOperations.checkIfFileExist();

TODO_LIST
  .version('0.1.2')
  .description('TO-DO list management system')
  .helpOption('-e, --help', 'Read more information');

TODO_LIST
  .command('add <activity>')
  .alias(aliases.addAlias(COMMAND))
  .description('Add activity to the List To-Do')
  .action(() => {
    storeOperations.add(process.argv.slice(3).join().replace(/,/g, ' '));
  });

TODO_LIST
  .command('remove <index-of-activity>')
  .alias(aliases.removeAlias(COMMAND))
  .description('delete one activity from the list To-Do')
  .action((index) => {
    storeOperations.remove(index);
  });

TODO_LIST
  .command('list ')
  .alias(aliases.listAlias(COMMAND))
  .description('See the To-Do list')
  .action(() => {
    storeOperations.list();
  });

TODO_LIST
  .command('reset ')
  .alias(aliases.resetAlias(COMMAND))
  .description('Reset the To-Do list')
  .action(() => {
    storeOperations.reset();
  });

TODO_LIST
  .command('update <index-of-activity> <new-updated-activity>')
  .alias(aliases.updateAlias(COMMAND))
  .description('Update one activity from the To-Do list')
  .action((index) => {
    storeOperations.update(index, process.argv.slice(3).join().replace(/,/g, ' '));
  });

TODO_LIST
  .command('help')
  .alias(aliases.helpAlias(COMMAND))
  .description('See all the option of the system')
  .action(() => {
    messages.help();
  });

if (!NO_COMMANDS_ALLOW) {
  messages.help();
}

TODO_LIST.parse(process.argv);
