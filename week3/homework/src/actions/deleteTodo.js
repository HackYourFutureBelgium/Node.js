'use strict';

function deleteTodo(todoManager, request, response) {
  let id = null;
  if (request.params.id) {
    id = request.params.id;
  }
  console.log(id);
  todoManager.delete(id)
    .then(() => {
      response.status(204);
      response.end();
    })
    .catch(({ message }) => {
      response.status(500);
      response.json({ error: message });
    });
}

module.exports = deleteTodo;
