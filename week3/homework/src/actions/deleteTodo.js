'use strict';

function deleteTodo(todoManager, request, response) {
  const id = request.params.id;

  todoManager.delete(id)
    .then(() => {
      response.status(204);
      response.end();
    })
    .catch(({message}) => {
      response.status(500);
      response.json({error: message});
    });
}

module.exports = deleteTodo;
