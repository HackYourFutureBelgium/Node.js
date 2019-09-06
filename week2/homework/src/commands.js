const fs = require("fs");
const usableCommands = require("./usableCommands.js")
const file = "itemList.js"

const readFile = fileName => {
  try {
    return JSON.parse(fs.readFileSync(fileName));
  } catch (e) {
    return [];
  }
};

const writeFile = (fileName, content) => {
  try {
    fs.writeFileSync(fileName, JSON.stringify(content));
    console.log("success");
  } catch (e) {
    console.log(e);
  }
};

const help = () => {
  console.log(usableCommands);
};

const list = () => {
  let itemList = readFile(file);
  console.log(itemList.toString());
};

const add = (item) => {
  let itemList = readFile(file);
    itemList.push( item );
    writeFile(file, itemList);
};

const remove = (item) => {
  let itemList = readFile(file);
  const filteredList = itemList.filter(x => x !== item);
  const result = filteredList.filter(function(e){return e});
  writeFile(file, result);
};

const update = (item,item2) => {
  let itemList = readFile(file);
  let index = itemList.findIndex(x => x === item);

  if (index !== -1) {
    itemList.splice(index,1,item2);
  }else {
    console.log(`${item} not found`)
  }
    writeFile(file, itemList);
};

const reset= ()=> {
  let itemList = readFile(file);
  itemList = [];
  writeFile(file, itemList);
}

module.exports = {
  help,
  list,
  add,
  remove,
  update,
  reset,
};