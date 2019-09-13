'use strict';

function markDone(todoManager, request, response) {
  const id = request.params.id;

  todoManager.markAsDone(id)
    .then(todo => {
      response.json({ todo });
      response.end();
    })
    .catch(({ message }) => {
      response.status(500);
      response.json({ error: message });
    });
};

module.exports = markDone;
