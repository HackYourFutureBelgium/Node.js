/* eslint-disable max-len */
'use strict';

function spellCheck() {
  console.log('\x1b[31m');
  console.log(`Whoops!, Please Digit a valid commad. Use 'help' command to get more info.`);
  console.log('\x1b[0m');
}

function checkActivity() {
  console.log('\x1b[31m');
  console.log('Please write some activity!');
  console.log('\x1b[0m');
}

function addSuccess() {
  console.log('\x1b[32m');
  console.log('You activity was added to the list.!');
  console.log('\x1b[0m');
}

function removeSuccess(activityToRemove) {
  console.log('\x1b[32m');
  console.log(`You activity "${activityToRemove[0].activity}" was removed from the list.!`);
  console.log('\x1b[0m');
}
function showList(information) {
  console.log('\x1b[36m');
  console.log('                                                                   ');
  console.log('     ID                      Activity                              ');
  console.log('   ══════════════════════════════════════════════════════════════  ');
  information.forEach((activityToDo, index) => {
    console.log('     ' + (index + 1) + '                ' + activityToDo.activity);
  });
  console.log('   ══════════════════════════════════════════════════════════════  ');
  console.log('                                                                   ');
  console.log('\x1b[0m');
}

function resetAdvice() {
  console.log('\x1b[31m');
  console.log('WARNING!! - If you reset the file, you will lost all your information !!!!');
  console.log(`write 'yes' to continue or type any to cancel`);
  console.log('\x1b[0m');
}

function resetSuccess() {
  console.log('\x1b[32m');
  console.log('You list To-Do is now empty.!');
  console.log('\x1b[0m');
}

function updateSuccess(oldActivity, newUpdatedActivity) {
  console.log('\x1b[32m');
  console.log(`You activity "${oldActivity}" was replaced by "${newUpdatedActivity}"`);
  console.log('\x1b[0m');
}

function help() {
  console.log('\x1b[44m');
  console.log('                                                                     ');
  console.log('  ╔═══════════════════════════════════════════════════════════════╗  ');
  console.log('  ║         ╔══╗   ╔══╗   ╔══╗  ╔══╗     ╔═══════╗                ║  ');
  console.log('  ║         ║  ║   ║  ║   ║  ║  ║  ║     ║  ╔════╝                ║  ');
  console.log('  ║         ║  ╚═══╝  ║    ║  ║║  ║      ║  ╚════╗                ║  ');
  console.log('  ║         ║         ║     ║ ║║ ║       ║  ╔════╝                ║  ');
  console.log('  ║         ║  ╔═══╗  ║      ║  ║        ║  ║                     ║  ');
  console.log('  ║         ║  ║   ║  ║      ║  ║        ║  ║                     ║  ');
  console.log('  ║         ╚══╝   ╚══╝      ╚══╝        ╚══╝                     ║  ');
  console.log('  ║                         HYF®BE                                ║  ');
  console.log('  ║               TO - DO List MANAGEMENT V 0.1.0                 ║  ');
  console.log('  ║                          By NN                                ║  ');
  console.log('  ╠═══════════════════════════════════════════════════════════════╣  ');
  console.log('  ║  You can use the next commands:                               ║  ');
  console.log('  ║                                                               ║  ');
  console.log('  ║ 1- add or a      E.g.: node index.js add "Buy groceries"      ║  ');
  console.log('  ║ 2- remove or r   E.g.: node index.js remove 2                 ║  ');
  console.log('  ║ 3- list or l     E.g.: node index.js list                     ║  ');
  console.log('  ║ 4- reset or re   E.g.: node index.js reset                    ║  ');
  console.log('  ║ 5- update or u   E.g.: node index.js update 3 "Brush teeth"   ║  ');
  console.log('  ║                                                               ║  ');
  console.log('  ║ To see this menu:                                             ║  ');
  console.log('  ║ 6- help or h     E.g.: node index.js help  or  node . h       ║  ');
  console.log('  ╚═══════════════════════════════════════════════════════════════╝  ');
  console.log('                                                                     ');
  console.log('\x1b[0m');
}

function isAValidIndex(index, sizeArray) {
  if (typeof (index) === 'number' && !isNaN(index)) {
    if (index > 0 && index <= sizeArray) {
      return true;
    }
    else {
      console.log('\x1b[31m');
      console.log(`You activity doens't exist, please write 'list' command`);
      console.log('\x1b[0m');
      return false;
    }
  }
  else {
    console.log('\x1b[31m');
    console.log('You must write a number');
    console.log('\x1b[0m');
    return false;
  }
}

module.exports = {
  spellCheck,
  checkActivity,
  addSuccess,
  removeSuccess,
  showList,
  resetAdvice,
  resetSuccess,
  updateSuccess,
  help,
  isAValidIndex
};
