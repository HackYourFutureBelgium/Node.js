'use strict';

function getTodos(todo, request, response) {
  todo.read()
    .then(todos => {
      const id = request.params.id;
      if (id !== undefined) {
        let todo = todos.find(t => t.id === id);
        if (todo) {
          response.json({ todo });
        }
        else {
          throw Error(`The TODO Activity ${id} doesn't Exist`);
        }
      }
      else {
        response.json({ todos });
      }
      response.end();
    })
    .catch(({ message }) => {
      response.status(500);
      response.json({ error: message });
    });
};

module.exports = getTodos;
