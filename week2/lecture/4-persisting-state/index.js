'use strict'

const args = process.argv;

const fs = require('fs')

const usableArgs = args.slice(2);

console.log(usableArgs);

if (usableArgs.length < 1) {
	throw new Error('Please enter at least one argument.');
}

const command = usableArgs[0];

switch (command) {
	case 'get':

		fs.readFile('./store.json', 'utf8', function (err, data) {

			if (err) {
				throw err;
			}

			const output = data;
			console.log(output);
		});
		break;
	case 'add':
		fs.readFile('./store.json', 'utf8', function (err, data) {

			if (err) {
				throw err;
			}


			const parsed = JSON.parse(data);
			parsed.state++;

			const asString = JSON.stringify(parsed);

			fs.writeFile('./store.json', asString, function (err) {

				if (err) {
					throw err;
				}

				console.log(asString);
			});
		});

		
		break;
	case 'subtract':
		
		break;
	case 'reset':
		break;
	default:
		throw new Error('Command not supported');
}

// perform operation

// respond
