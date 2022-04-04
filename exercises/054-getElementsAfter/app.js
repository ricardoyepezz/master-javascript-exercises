function getElementsAfter(array, n) {
  return array.splice(n+1)
}

var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 0); 
console.log(output); // --> ['d', 'e']