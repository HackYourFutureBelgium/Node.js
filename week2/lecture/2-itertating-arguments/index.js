'use strict'


for (let i = 0; i < process.argv.length; i++) {
	console.log(`The ${i}th argument is ${process.argv[i]}`)
}

console.log();
console.log();

const usableArguments = process.argv.slice(2)

console.log(`I am the 3rd usable argument ${usableArguments[2]}`)
