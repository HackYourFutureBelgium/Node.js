/* eslint-disable max-len */
'use strict';

const fs = require('fs');

function createFile() {
  fs.appendFileSync('./to-do.csv', '', 'utf8');
}

function write(information) {
  let informationToWrite;

  if (information !== '')
    informationToWrite = convertJsonToCVS(information);

  fs.writeFileSync('to-do.csv', informationToWrite, (err) => {
    if (err) return console.log(err);
  });
}

function convertJsonToCVS(information) {
  let informationCVS = '';
  information.forEach((eachline, index) => {
    let stringInformation = JSON.stringify(eachline.activity);
    if (stringInformation !== '' && stringInformation !== null) {
      informationCVS = informationCVS + (index + 1) + ',' + stringInformation + '\r\n';
    }
  });
  return informationCVS;
}

module.exports = {
  write,
  createFile
};
