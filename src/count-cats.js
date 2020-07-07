const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  var searchElement = '^^';
  var count = 0;
  for (var i=0; i<array.length; i++){
	  for(var j =0 ; j< array[i].length; j++){
		if (array[i][j] === searchElement) {
			count += 1;  
		}
	  }
  }
  return count;
};
