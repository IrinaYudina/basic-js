const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(d) {
	if(d == null){
		return 'Unable to determine the time of year!';
	}
	if ( Object.prototype.toString.call(d) === "[object Date]" ){
		var month = d.getMonth();
		var season = '';
		switch(month) {
			case 11:
			case 0:
			case 1:
				season = 'winter';
			break;
			case 2:
			case 3:
			case 4:
				season = 'spring';
			break;
			case 5:
			case 6:
			case 7:
				season = 'summer';
			break;
			case 8:
			case 9: 
			case 10:
				season = 'fall';
			break;
		}
	
		return season;
	}
	throw new Error();
};
