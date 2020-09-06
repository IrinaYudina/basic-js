const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const times = options.repeatTimes;
  const delimiter = (!options.separator) ? '+' : options.separator;
  const add = String(options.addition);
  const extraTime = options.additionRepeatTimes;
  const extraSeparator= (!options.additionSeparator) ? '|' : options.additionSeparator;
  let extraString = add;
  for( let i = 0; i < extraTime - 1 ; i++){
    extraString += extraSeparator + add; 
  }
  if(add != 'undefined'){
    str += extraString;
  }
  let res = str;
  for( let i = 0; i < times - 1 ; i++){
    res += delimiter + str; 
  }
  return res;
};
  