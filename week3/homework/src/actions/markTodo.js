'use strict';

function markAsDone(todo, request, response) {
  const id = request.params.id;
  const method = request.method;
  todo.mark(id, method)
    .then(todo => {
      response.json({ todo });
      response.end();
    })
    .catch(({ message }) => {
      response.status(500);
      response.json({ error: message });
    });
};

module.exports = markAsDone;
