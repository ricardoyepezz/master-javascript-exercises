function addToBackOfNew(arr, element) {
  let newArr = [];
  newArr.push(element);
  return arr.concat(newArr);
}

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]
