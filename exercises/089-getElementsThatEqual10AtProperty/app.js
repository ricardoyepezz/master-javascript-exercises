function getElementsThatEqual10AtProperty(obj, key) {
  let newArr = [];
  for (element in obj[key]) {
    if (obj[key][element] === 10) {
      newArr.push(obj[key][element]);
    }
  }
  return newArr;
}

var obj = {
  key: [1000, 10, 50, 10],
};
var output = getElementsThatEqual10AtProperty(obj, "key");
console.log(output); // --> [10, 10]
