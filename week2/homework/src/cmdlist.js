'use strict';

const availableCmds = {
    "help": "Shows help section",
    "list": "Shows current to-dos, or shows an appropriate text if there are no to-dos",
    "add": "Adds a to-do item. All the words behind add are entered as 1 to-do item to the list.",
    "remove": "Removes a to-do item by its 1-base index, e.g. to remove second item.",
    "update": "Updates a to-do item with new text.",
    "reset": "Removes all to-do items from the list."
}

module.exports = {
    availableCmds,
}