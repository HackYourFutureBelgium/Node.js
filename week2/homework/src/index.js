'use strict'

const caseFuncs = require("./cases_controls")
const usableArgs = process.argv.slice(2)
const command = usableArgs[0]
const firstParam = usableArgs[1]
// const secondParam = usableArgs[2]

if (usableArgs.length < 0) {
    throw new Error('Please enter at least one argument.')
}

switch (command) {
    case undefined:
    case 'help':
        caseFuncs.showHelp()
        break
    case 'list':
        caseFuncs.showList()
        break
    case 'add':
        caseFuncs.add(firstParam)
        break
    case 'remove':
        caseFuncs.remove(firstParam)
        break
    // case 'update':
    //     caseFuncs.update(firstParam, secondParam)
    //     break
    case 'reset':
        caseFuncs.resetList()
        break
    default:
        throw new Error('Please enter a valid argument.')
}