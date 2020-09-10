const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(date) {
  if(typeof date === 'string') {
    let formatString = date.substring(0, 3) + date.substring(3, date.length).split('.').join('');
    if(!isNaN(Number(formatString)) && Number(formatString) < MODERN_ACTIVITY && Number(formatString) > 0){
      let res = Number(formatString);
      let k = 0.693/HALF_LIFE_PERIOD;
      res = Math.ceil(Math.log(MODERN_ACTIVITY/res)/k);
      return res;
    }
  }
  return false;
}