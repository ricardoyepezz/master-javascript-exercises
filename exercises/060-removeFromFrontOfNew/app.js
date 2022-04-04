function removeFromFrontOfNew(arr) {
    return arr.slice(1)
}

var arr = [1, 2, 3];
var output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]