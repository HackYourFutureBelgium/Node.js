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
    const filteredTodos = todos.filter(t => t.id !== id);
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
}

module.exports = TodoManager;
