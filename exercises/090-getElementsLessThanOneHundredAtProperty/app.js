function getElementsLessThan100AtProperty(obj, key) {
  let arr = [];
  for (element in obj[key]) {
    if (obj[key][element] < 100) {
      arr.push(obj[key][element]);
    }
  }
  return arr;
}

var obj = {
  key: [1000, 20, 50, 500],
};
var output = getElementsLessThan100AtProperty(obj, "key");
console.log(output); // --> [20, 50]
