'use strict';

function getTodos(todo, request, response) {
  todo.read()
    .then(todos => {
      response.json({todos});
      response.end();
    })
    .catch(({message}) => {
      response.status(500);
      response.json({error: message});
    });
};

module.exports = getTodos;
