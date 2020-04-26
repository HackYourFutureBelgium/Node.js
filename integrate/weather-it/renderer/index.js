'use strict'

const boxen = require('boxen');

function renderError(message) {

    const boxedMessage = boxen(
        message,
        {
            backgroundColor: 'red',
            borderColor: 'yellow',
            borderStyle: 'bold',
            padding: 3
        }
    );

    console.log(boxedMessage);
}

function renderSuccess(...messages) {

    const combined = messages.join('\n');

    const boxedMessage = boxen(
        combined,
        {
            backgroundColor: 'green',
            borderColor: 'blue',
            borderStyle: 'round',
            padding: 1
        }
    );

    console.log(boxedMessage);
}

module.exports = {
    renderError,
    renderSuccess
}
