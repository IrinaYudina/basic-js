const CustomError = require("../extensions/custom-error");

Array.prototype.max = function() {
    return Math.max.apply(null, this);
}; 

module.exports = class DepthCalculator {
  constructor(){
    this.calculateDepth = this.calculateDepth.bind(this);
  }

  calculateDepth(arr, level = 1) {
    const self = this;
    var res = level;
    for(var i = 0; i < arr.length; ++i) {
        if (Array.isArray(arr[i])) {
        var subDepth = self.calculateDepth(arr[i], level + 1);
        if (subDepth > res) {
            res = subDepth;
        }
      }
    }
    return res;
  }
};