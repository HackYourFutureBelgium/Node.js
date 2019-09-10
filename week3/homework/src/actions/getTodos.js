'use strict';

function getTodos(todo, request, response) {
  todo.read()
    .then(todos => {
      const id = request.params.id;
      if (id) {
        let activityToDo = null;
        todos.forEach(element => {
          if (element.id === id) {
            activityToDo = element;
          }
        });
        if (activityToDo) {
          response.json({ activityToDo });
        }
        else {
          throw Error(`The TODO Activity doesn't Exist`);
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
