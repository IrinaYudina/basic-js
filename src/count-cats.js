function countCats(array) {
  var searchElement = '^^';
  var count = 0;
  for (var i=0; i<array.length; i++){
      if (array[i].indexOf(searchElement) != -1) {
        count += 1;  
      }
  }
  return count;
};
