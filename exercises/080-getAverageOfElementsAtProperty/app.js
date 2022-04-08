function getAverageOfElementsAtProperty(obj, key) {
  let count = 0;
  if (obj[key] < 1 || !Array.isArray(obj[key])) {
    return 0;
  }
  for (let prop in obj[key]) {
    count = count + obj[key][prop];
  }
  return count / obj[key].length;
}

var obj = {
  key: [3, 2, 3],
};
var output = getAverageOfElementsAtProperty(obj, "key");
console.log("output", output);
