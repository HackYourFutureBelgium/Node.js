'use strict';

function deleteTodos(todoManager, request, response) {
  const id = request.params.id;

  todoManager.deleteAll()
    .then(() => {
      response.status(204);
      response.end();
    })
    .catch(({ message }) => {
      response.status(500);
      response.json({ error: message });
    });
}

module.exports = deleteTodos;