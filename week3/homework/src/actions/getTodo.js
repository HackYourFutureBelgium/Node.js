'use strict';

function getTodo(todoManager, request, response) {
  const id = request.params.id;
 
  todoManager.readById(id)
    .then(todo => {
      response.json({ todo });
      response.end();
    })
    .catch(({ message }) => {
      response.status(500);
      response.json({ error: message });
    });
};

module.exports = getTodo;
