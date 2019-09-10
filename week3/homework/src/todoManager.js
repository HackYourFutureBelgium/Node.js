const fs = require('fs').promises;
const uuid = require('uuid/v4');

const DEFAULT_ENCODING = 'utf8';

class TodoManager {
  constructor(filename) {
    this._filename = filename;
  }

  async create(description) {
    const todos = await this.read();
    const todo = {
      id: uuid(),
      done: false,
      description
    };
    todos.push(todo);
    await this.write(todos);
    return todo;
  }

  async update(id, description) {
    const todos = await this.read();
    const todo = todos.find(t => t.id === id);
    if (todo === null) {
      const error = new Error(`To-do with ID ${id} does not exist`);
      error.code = 'not-found';
      throw error;
    }
    todo.description = description;
    await this.write(todos);

    return todo;
  }

  async delete(id) {
    const todos = await this.read();
    let filteredTodos = [];
    if (id !== null) {
      filteredTodos = todos.filter(t => t.id !== id);
      // Send an Error when the activity doesn't.
      const deleteItem = todos.filter(t => t.id === id);
      if (!deleteItem.length) {
        throw Error(`The activity with id: ${id} doesn't Exist`);
      }
    }
    return this.write(filteredTodos);
  }

  read() {
    return fs.readFile(this._filename, DEFAULT_ENCODING)
      .then((contents) => JSON.parse(contents))
      .catch((err) => {
        if (err.code === 'ENOENT') return [];
        else throw err;
      });
  }

  write(todos) {
    // third argument of stringify is nr of spaces indentation for readability
    return fs.writeFile(this._filename, JSON.stringify(todos, null, 2));
  }

  async mark(id, method) {
    const todos = await this.read();
    const todo = todos.find(t => t.id === id);
    if (todo === null || todo === undefined) {
      const error = new Error(`To-do with ID ${id} does not exist`);
      error.code = 'not-found';
      throw error;
    }
    if (method === 'POST') {
      if (todo.done === true) {
        throw new Error(`The activity is already with state done`);
      }
      todo.done = true;
    }
    else {
      if (todo.done === false) {
        throw new Error(`The activity is currently with state not made`);
      }
      todo.done = false;
    }

    await this.write(todos);
    return todo;
  }
}

module.exports = TodoManager;
