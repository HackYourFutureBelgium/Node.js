'use strict';

// CRUD actions
module.exports = {
  createTodo: require('./createTodo'),
  readTodos: require('./getTodos'),
  updateTodo: require('./updateTodo'),
  deleteTodo: require('./deleteTodo'),
  readTodo: require('./readTodo'),
  clearTodo: require('./clearTodo'),
  markAsDone: require('./markAsDone'),
  markAsNotDone: require('./markAsNotDone'),
};
