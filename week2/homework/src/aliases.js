/* eslint-disable max-len */
'use strict';

const helpAliases = [
  'h',
  'he',
  'hel'
];
const addAliases = [
  'a',
  'ad'
];
const removeAliases = [
  'r',
  'rem',
  'remo',
  'remov'
];
const listAliases = [
  'l',
  'li',
  'lis'
];
const resetAliases = [
  're',
  'res',
  'rese'
];
const updateAliases = [
  'u',
  'up',
  'upd',
  'upda',
  'updat'
];

function helpAlias(alias) {
  return helpAliases.includes(alias) ? alias : null;
}

function addAlias(alias) {
  return addAliases.includes(alias) ? alias : null;
}

function removeAlias(alias) {
  return removeAliases.includes(alias) ? alias : null;
}

function listAlias(alias) {
  return listAliases.includes(alias) ? alias : null;
}

function resetAlias(alias) {
  return resetAliases.includes(alias) ? alias : null;
}

function updateAlias(alias) {
  return updateAliases.includes(alias) ? alias : null;
}
module.exports = {
  helpAlias,
  addAlias,
  removeAlias,
  listAlias,
  resetAlias,
  updateAlias
};
