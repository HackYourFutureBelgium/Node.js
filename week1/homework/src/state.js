let state = 10;

let get = function () {
    return { state };
}

let add = function () {
    state++;
    return { state };
}

let subtract = function () {
    state--;
    return { state };
}

let reset = function () {
    state = 10;
    return { state };
}

module.exports = { get, add, subtract, reset };