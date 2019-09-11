'use strict'

const args = process.argv;

const state = require('./state');

const usableArgs = args.slice(2);

console.log(usableArgs);

if (usableArgs.length < 1) {
	throw new Error('Please enter at least one argument.');
}

const command = usableArgs[0];

switch (command) {
	case 'get':
		console.log(JSON.stringify(state.get()));
		break;
	case 'add':
		console.log(JSON.stringify(state.add()));
		break;
	case 'subtract':
		console.log(JSON.stringify(state.subtract()));
		break;
	case 'reset':
		break;
	default:
		throw new Error('Command not supported');
}

// perform operation

// respond
