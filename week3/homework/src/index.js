'use strict';

const Express = require('express');

// import our CRUD actions
const {
  createTodo,
  readTodos,
  updateTodo,
  deleteTodo
} = require('./actions');

const TodoManager = require('./todoManager');

const FILENAME = 'todos.json';
const PORT = 3000;
const TODOS = 'todos';

const todoManager = new TodoManager(FILENAME);

const app = new Express();

// Use built-in JSON middleware to automatically parse JSON
app.use(Express.json());

// createTodo.bind creates a new function with the same code as createTodo
// but with the first parameter (todoManager) already filled in
// with the manager we passed on in the binding
// the signature will now be createTodo(request, response)
app.post(`/${TODOS}`, createTodo.bind(null, todoManager));
app.get(`/${TODOS}`, readTodos.bind(null, todoManager));
app.put(`/${TODOS}/:id`, updateTodo.bind(null, todoManager));
app.delete(`/${TODOS}/:id`, deleteTodo.bind(null, todoManager));

app.listen(PORT, error => {
  if (error)
    return console.error(error);

  console.log(`Server started on http://localhost:${PORT}`);
});
