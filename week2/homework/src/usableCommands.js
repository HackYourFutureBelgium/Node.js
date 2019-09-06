
'use strict';

function usableCommands() {
    console.log(`
    help  : Shows usable commands [help]
    list  : Shows current list of items [list]
    add   : Adds an item to the list [add item]
    remove: Removes an item from the list [remove item]
    update: Replace an item with item2 [update item item2]
    reset : Removes all items from the list [reset]
    `);  
};

module.exports = new usableCommands();

