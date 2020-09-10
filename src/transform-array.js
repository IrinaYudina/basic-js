const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let res = [];
  if(!Array.isArray(arr)){
    throw new Error();
  }
  else{
  for( let i = 0; i < arr.length; i++) {
    let s = res.length;
    if(arr[i] === '--discard-next') {
      if(i != arr.length - 1) { 
        i = i + 1;
      }
      continue;
    }
    else if(arr[i] === '--discard-prev') {
      if(i != 0) {
        if(arr.length >= 3 && arr[i - 2] != '--discard-next' && i >= 2){
          res.splice(-1, 1)
        }
        else if( i == 1){
          res.splice(-1, 1)
        }
      }
    }
    else if(arr[i] === '--double-next') {
      if(i != arr.length - 1) {
        res.push(arr[i + 1]);
      }
    }
    else if(arr[i] === '--double-prev') {
      if(i != 0) {
        if(arr.length >= 3 && arr[i - 2] != '--discard-next' && i >= 2){
          res.push(arr[i - 1]);
        }
        else if( i == 1){
          res.push(arr[i - 1]);
        }
      }
    }
    else{
      res.push(arr[i]);
    }
  }
}
return res;
};
