const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
	if(!Array.isArray(array)){
		return false;
	}
	var unSortedMass =[];
	for(var i=0; i< array.length; i++){
		if (typeof(array[i]) == "string"){
			unSortedMass.push(array[i].trim().charAt(0).toUpperCase());
		}
	}
	if(unSortedMass.length != 0){
		return unSortedMass.sort().join('');
	}
	return false;
};
