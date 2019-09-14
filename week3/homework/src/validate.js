'use strict';

const Ajv = require('ajv');
const ajv = new Ajv();

function validateTodoList(data) {
  const schema = {
    'title':'todo list validator',
    'type': 'object',
    'properties': {
      'todo': {
        'type': 'object',
        'properties': {
          'description': {
            'type': 'string'
          }
        },
        'required':['description']
      }
    },
    'required': [
      'todo'
    ]
  };
  return ajv.validate(schema, data);
};

module.exports = { validateTodoList };
