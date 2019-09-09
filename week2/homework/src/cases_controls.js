'use strict'

const pathToList = "./todolist.json"
const pathToCmds = "./cmdlist.json"
const fsHandler = require("./fs_controls")
const readFromFile = fsHandler.readFromFile
const addToFile = fsHandler.addToFile
const removeFromFile = fsHandler.removeFromFile
const resetFile = fsHandler.resetFile

function showHelp() {
    readFromFile(pathToCmds)
}

function showList() {
    readFromFile(pathToList, readFromFile)
}

function add(param) {
    addToFile(pathToList, param)
}

function remove(param) {
    removeFromFile(pathToList, param)
}

function resetList() {
    resetFile(pathToList)
}

// function update(prmOne, prmTwo) {
//     prmOne--
//     todoList.splice(prmOne, 1, prmTwo)
//     console.log(todoList)
//     console.log(prmOne + " and " + prmTwo)
// }

module.exports = {
    showHelp,
    showList,
    add,
    remove,
    // update,
    resetList
}