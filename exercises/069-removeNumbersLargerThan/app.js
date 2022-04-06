var obj = {
  a: 8,
  b: 2,
  c: "montana",
};
function removeNumbersLargerThan(num, obj) {
  for (let key in obj) {
    // recorremos obj
    if (obj[key] > num) {
      // vemos si existen keys mayores a num, y de ser asi lo eliminamos
      delete obj[key];
      console.log(key);
    }
  }
  return obj;
}

console.log(removeNumbersLargerThan(2,obj));