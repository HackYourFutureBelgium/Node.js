/* eslint-disable max-len */
'use strict';

const fs = require('fs');

function existFile() {
  return fs.existsSync('./to-do.csv');
}

function read() {
  let information = fs.readFileSync('to-do.csv');
  return convertInformationToJson(information);
}

function convertInformationToJson(information) {
  let stringInformation = information.toString();
  let informationByLines = stringInformation.split('\r\n');
  let objJsonToReturn = [];

  informationByLines.forEach((eachline) => {
    let informationbyOneLine = eachline.split(',');
    if (informationbyOneLine[1] !== undefined && informationbyOneLine[1] !== '') {
      let activityInformation = JSON.parse('{ "activity":' + informationbyOneLine[1] + '}');
      objJsonToReturn.push(activityInformation);
    }
  });
  return objJsonToReturn;
}

module.exports = {
  read,
  existFile
};
