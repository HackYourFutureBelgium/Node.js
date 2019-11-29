// In memory representation of todos
let todos = [];

function set(newTodos) {
  todos = newTodos;
  return todos;
}

function get() {
  return todos;
}

function add(todo) {
  todos.push(todo);
  return todos;
}

function remove(index) {
  todos.splice(index, 1);
  return todos;
}

function update(index, todo) {
  todos[index] = todo;
  return todos;
}

function reset() {
  todos = [];
  return todos;
}

module.exports = { set, get, add, remove, update, reset };
