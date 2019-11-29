// All external packages we use
const program = require('commander');
const sprintf = require('sprintf-js').sprintf;

// All our own packages we use
const todoManager = require('./todoManager');
const fileManager = require('./fileManager');

if (process.argv.length < 3) {
  program.help(() => 'Provide at least one argument, see \'help\' for more info');
} else {
  initialize();
}

// Asynchronous function so we can 'await' promises
async function initialize() {
  // Use keyword 'await' to wait for a promise to be fulfilled, you can only use this inside an asynchronous function
  const todos = await fileManager.readStore();
  todoManager.set(todos);
  
  // Configure commander to take program arguments
  addCommand(program, 'list', 'List of all todos', list);
  // The '<todo>' syntax indicates an argument, to use all arguments after add we use '<todo...>'
  addCommand(program, 'add <todo...>', 'Add <todo> to list of todos', add);
  addCommand(program, 'remove <index>', 'Remove entry <index> from todos', remove);
  addCommand(program, 'update <index> <todo...>', 'Updates entry <index> with <todo>', update);
  addCommand(program, 'reset', 'Removes all todos', reset);
  program.parse(process.argv);
}

function addCommand(program, command, description, action) {
  program
    .command(command)
    .description(description)
    .action(action);
}

function list() {
  todoManager.get().forEach((todo, index) => console.log(sprintf('%5s: %s', index+1, todo)));
}

async function add(todo) {
  // todo is an array with one or more words, we join them together with a space in between
  const todos = todoManager.add(todo.join(' '));
  await fileManager.writeStore(todos);
  list();
}

async function remove(index) {
  // Only do something if index is a number between zero and amount of todos
  if (!Number.isNaN(Number(index)) && index > 0 && index <= todoManager.get().length) {
    const todos = todoManager.remove(index-1);
    await fileManager.writeStore(todos);
    list();
  } else {
    throw 'Incorrect index given';
  }
}

async function update(index, todo) {
  if (!Number.isNaN(Number(index)) && index > 0 && index <= todoManager.get().length) {
    const todos = todoManager.update(index-1, todo.join(' '));
    await fileManager.writeStore(todos);
    list();
  } else {
    throw 'Incorrect index given';
  }
}

async function reset() {
  const todos = todoManager.reset();
  await fileManager.writeStore(todos);
  list();
}
