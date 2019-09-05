/* eslint-disable max-len */
function usage() {
  console.log(`
    HackYourFuture Node.js week2 to-do-app
    Usage: node [dirname] [command] 
    commands     description
    list        list all items from todo list                                               
    add         add item to todo list
    remove      remove item from todo list
    update      update  item
    reset       delete all todo list items 
    help        show this help text
`);
}

function error() {
  console.log(`
  "${process.argv[2]}" is not a valid command:
  to see the valid commands type:
  <node . > or <node . help>
  `);
}
module.exports = {
  error,
  usage
};
