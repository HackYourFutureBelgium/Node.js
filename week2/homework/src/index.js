'use strict';

const TODO_LIST = require('commander');
const messages = require('./messages');
const storeOperations = require('./storeOperations');
const aliases = require('./aliases');
const ALIAS = process.argv.slice(2)[0];
storeOperations.checkIfFileExist();

TODO_LIST
  .version('0.1.2')
  .description('TO-DO list management system')
  .helpOption('-e, --help', 'Read more information');

TODO_LIST
  .command('add <activity>')
  .alias(aliases.addAlias(ALIAS))
  .description('Add activity to the List To-Do')
  .action((activity) => {
    storeOperations.add(activity);
  });

TODO_LIST
  .command('remove <index-of-activity>')
  .alias(aliases.removeAlias(ALIAS))
  .description('delete one activity from the list To-Do')
  .action((index) => {
    storeOperations.remove(index);
  });

TODO_LIST
  .command('list ')
  .alias(aliases.listAlias(ALIAS))
  .description('See the To-Do list')
  .action(() => {
    storeOperations.list();
  });

TODO_LIST
  .command('reset ')
  .alias(aliases.resetAlias(ALIAS))
  .description('Reset the To-Do list')
  .action(() => {
    storeOperations.reset();
  });

TODO_LIST
  .command('update <index-of-activity> <new-updated-activity>')
  .alias(aliases.updateAlias(ALIAS))
  .description('Update one activity from the To-Do list')
  .action((index, newUpdatedActivity) => {
    storeOperations.update(index, newUpdatedActivity);
  });

TODO_LIST
  .command('help')
  .alias(aliases.helpAlias(ALIAS))
  .description('See all the option of the system')
  .action(() => {
    messages.help();
  });

if (!process.argv.slice(2).length) {
  messages.help();
}

TODO_LIST.parse(process.argv);
