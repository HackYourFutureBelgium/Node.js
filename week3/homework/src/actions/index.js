'use strict';

// CRUD actions
module.exports = {
  createTodo: require('./createTodo'),
  readTodos: require('./getTodos'),
  updateTodo: require('./updateTodo'),
  deleteTodo: require('./deleteTodo'),
  readTodo: require('./getTodo'),
  clearTodos: require('./deleteTodos'),
  markAsDone: require('./markDone'),
  markAsNotDone: require('./markNotDone')
};
