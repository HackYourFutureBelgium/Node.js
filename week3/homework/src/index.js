'use strict';

// require installed apps

const path = require('path');
const uuid = require('uuid/v4');
const express = require('express');
const app = express();

const {
  readTodoFile,
  writeTodoFile
} = require('./controllers');

app.use(express.json());

const storeFile = path.join(__dirname, 'store.json');

// createTodo (POST /todos)
app.post('/todos', (req, res) => {
  // validate request
  const todo = req.body.todo;
  if (req.body || todo || todo.description) {
    return  res.status(400).send(`todo and description are required`);
  }

  // add to todo list
  readTodoFile(storeFile, (todoList) => {
    const task = {
      id: uuid(),
      description: todo.description,
      done:false
    };

    todoList.push(task);

    writeTodoFile(storeFile, todoList, () => { });

    res.status(201).send(task);
  });
});

// getTodos (GET /todos)
app.get('/todos', (req, res) => {
  readTodoFile(storeFile, (todoList) => {
    res.send(todoList);
  });
});

// updateTodo (PUT /todos/:id)
app.put('/todos/:id', (req, res) => {
  // validate
  const todo = req.body.todo;

  if (req.body || todo || todo.description) {
    return  res.status(400).send(`todo and description are required`);
  }

  // look up the list
  readTodoFile(storeFile, (todoList) => {
    const task = todoList.find(todo => todo.id === req.params.id);

    // if not exists , return 404
    if (!task) {
      return res.status(404).send('the todo task with the given ID is not found');
    };

    // update
    task.description = req.body.todo.description;
    const index = todoList.indexOf(task);
    todoList.splice(index, 1, task);

    writeTodoFile(storeFile, todoList, () => { });

    res.status(200).send(task);
  });
});

// deleteTodo (DELETE /todos/:id)
app.delete('/todos/:id', (req, res) => {
  // look up the list
  readTodoFile(storeFile, (todoList) => {
    const task = todoList.find(todo => todo.id === req.params.id);

    // if not exists , return 404
    if (!task) {
      return res.status(404).send('the todo task with the given ID is not found');
    };

    // delete
    const index = todoList.indexOf(task);
    todoList.splice(index, 1);

    writeTodoFile(storeFile, todoList, () => { });

    res.status(200).send(task);
  });
});

// readTodo (GET /todos/:id)
app.get('/todos/:id', (req, res) => {
  // look up the list
  readTodoFile(storeFile, (todoList) => {
    const task = todoList.find(todo => todo.id === req.params.id);

    // if not exists , return 404
    if (!task) {
      return res.status(404).send('the todo task with the given ID is not found');
    };

    res.status(200).send(task);
  });
});

// clearTodos (DELETE /todos)
app.delete('/todos', (req, res) => {
  readTodoFile(storeFile, (todoList) => {
    todoList.splice(0, todoList.length);

    writeTodoFile(storeFile, todoList, () => { });

    res.status(204).send(todoList);
  });
});

// markAsDone (POST /todos/:id/done)
app.post('/todos/:id/done', (req, res) => {
  readTodoFile(storeFile, (todoList) => {
    const task = todoList.find(todo => todo.id === req.params.id);

    // if not exists , return 404
    if (!task) {
      return res.status(404).send('the todo task with the given ID is not found');
    };

    // update
    task.done = true;
    const index = todoList.indexOf(task);
    todoList.splice(index, 1, task);

    writeTodoFile(storeFile, todoList, () => { });

    res.status(201).send(task);
  });
});

// markAsNotDone (DELETE /todos/:id/done)
app.delete('/todos/:id/done', (req, res) => {
  readTodoFile(storeFile, (todoList) => {
    const task = todoList.find(todo => todo.id === req.params.id);

    // if not exists , return 404
    if (!task) {
      return res.status(404).send('the todo task with the given ID is not found');
    };

    // update
    task.done = false;
    const index = todoList.indexOf(task);
    todoList.splice(index, 1, task);

    writeTodoFile(storeFile, todoList, () => { });

    res.status(204).send(task);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT} ...`));
