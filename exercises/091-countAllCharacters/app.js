function countAllCharacters(str) {
  obj = {};
  if (str === "") return;
  for (let i = 0; i < str.length; i++) {
    if (typeof obj[str[i]] === "undefined") {
      obj[str[i]] = 1;
    } else obj[str[i]] += 1;
  }
  return obj;
}

var output = countAllCharacters("banana");
console.log(output); // --> {b: 1, a: 3, n: 2}
