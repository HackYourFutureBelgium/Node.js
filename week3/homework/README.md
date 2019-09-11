# HackYourFuture Node.js Week 3 - Homework

Read through the existing code, make sure you understand the flow of the program.
Following routes were already implemented:

### `createTodo` (`POST /todos`)
You can use the `POST` method of the `/todos` route to create a new todo. 
This is what the message body should look like :
```json
{
  "todo": {
    "description": "Buy groceries"
  }
}
```
Make sure to set the body type to `raw` and `application/json`.

### `getTodos` (`GET /todos`)
You can use the `GET` method of the `/todos` route to get all existing todos.

### `updateTodo` (`PUT /todos/:id`)
You can use the `PUT` method of the `/todos/:id` route to update an existing todo. 
This is what the message body should look like :
```json
{
  "todo": {
    "description": "Buy groceries and cat food"
  }
}
```
Make sure to set the body type to `raw` and `application/json`.

### `deleteTodo` (`DELETE /todos/:id`)
You can use the `DELETE` method of the `/todos/:id` route to delete an existing todo. 

## Assignment

Add four more actions:

### `readTodo` (`GET /todos/:id`)

  Get a single to-do with ID `:id`

### `clearTodos` (`DELETE /todos`)

  Clears the list of to-dos

### `markAsDone` (`POST /todos/:id/done`)

  Sets the `done` flag of a single to-do to `true`

### `markAsNotDone` (`DELETE /todos/:id/done`)

  Sets the `done` flag of a single to-do to `false`

## Requirements

- All requests that need a body should be in JSON format, and follow the request
  structure of the other actions
- All responses should be in JSON format, and follow the response structure of
  the other actions
- Make sure your code is [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
- Follow the REST design principles: use the proper method, response status
  codes, and consistent URL paths
- Test your API using Postman
