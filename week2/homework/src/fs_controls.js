'use strict'

const fs = require('fs')
const EMPTY_ARRAY = []
const strArray = JSON.stringify(EMPTY_ARRAY)
const helpObj = [
  "help: Shows help section",
  "list: Shows current to-dos, or shows an appropriate text if there are no to-dos",
  "add: Adds a to-do item. All the words behind add are entered as 1 to-do item to the list.",
  "remove: Removes a to-do item by its 1-base index, e.g. to remove second item.",
  "update: Updates a to-do item with new text",
  "reset: Removes all to-do items from the list"
]
const strHelpObj = JSON.stringify(helpObj)

function readFromFile(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err && err.code == 'ENOENT') {
      if (path === "./todolist.json") {
        fs.writeFile(path, strArray, (err) => {
          if (err) throw err
        })
      }
      else if (path === "./cmdlist.json" || path === undefined) {
        fs.writeFile(path, strHelpObj, (err) => {
          if (err) throw err
        })
      }
    }
    else {
      fs.readFile(path, 'utf8', (err, data) => {
        if (err) throw err
        console.log(JSON.parse(data))
      })
    }
  })
}

const addToFile = function (path, param) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err
    const parsed = JSON.parse(data)
    parsed.push(param)
    const stringified = JSON.stringify(parsed)
    fs.writeFile(path, stringified, (err) => {
      if (err) throw err
      console.log("The file was saved!")
    })
  })
}

const removeFromFile = function (path, param) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err
    const parsed = JSON.parse(data)
    if (param < 0 || param > parsed.length) {
      throw new Error('Not in range')
    }
    else {
      param--
      parsed.splice(param, 1)
      const stringified = JSON.stringify(parsed)
      fs.writeFile(path, stringified, (err, data) => {
        if (err) throw err
        console.log("The file was saved!")
      })
    }
  })
}

const resetFile = function (path, param) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err
    let parsed = JSON.parse(data)
    parsed = EMPTY_ARRAY
    const stringified = JSON.stringify(parsed)
    fs.writeFile(path, stringified, (err, data) => {
      if (err) throw err
      console.log("The file was saved!")
    })
  })
}


module.exports = {
  readFromFile,
  addToFile,
  removeFromFile,
  resetFile
}
