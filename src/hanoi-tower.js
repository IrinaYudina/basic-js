const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
  var turns = Math.pow(2, disksNumber) - 1;
  var sec = (turns/turnsSpeed)*3600;
  var seconds = Math.floor(sec);
  return {'turns': turns, 'seconds': seconds};
};
