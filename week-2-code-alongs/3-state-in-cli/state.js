'use strict'

const DEFAULT_STATE = 10;

let state = DEFAULT_STATE;

function get() {
	return { state };
}

function add() {
	state++;
	return { state };
}

function subtract() {
	state--;
	return { state };	
}

function reset() {
	state = DEFAULT_STATE;
	return { state };
}

module.exports = {
	get,
	add,
	subtract,
	reset
}
