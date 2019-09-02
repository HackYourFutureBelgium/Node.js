let state = 10;

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
  state = 10;
  return { state };
}

module.exports = { get, add, subtract, reset };