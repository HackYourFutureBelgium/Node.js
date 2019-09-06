/* eslint-disable max-len */
'use strict';

const fs = require('fs');

function createFile() {
  fs.writeFile('./to-do.csv', '', 'utf8');
}

function write(information) {
  let informationToWrite;

  if (information !== '')
    informationToWrite = convertJsonToCSV(information);

  fs.writeFile('./to-do.csv', informationToWrite, (err) => {
    if (err) return console.log(err);
  });
}

function convertJsonToCSV(information) {
  let informationCSV = '';
  information.forEach((eachline, index) => {
    let stringInformation = JSON.stringify(eachline.activity);
    if (stringInformation !== '' && stringInformation !== null) {
      informationCSV += (index + 1) + ',' + stringInformation + '\r\n';
    }
  });
  return informationCSV;
}

module.exports = {
  write,
  createFile
};
