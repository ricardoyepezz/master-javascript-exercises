function getAllElementsButFirst(array) {
  return array.slice(0+1)
  // your code here
}

var input = [1, 2, 3, 4];
var output = getAllElementsButFirst(input);
console.log(output); // --> [2, 3, 4]