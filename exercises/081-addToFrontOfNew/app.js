
function addToFrontOfNew(arr, element) {
    //declaramos nuevo array
    let newArr =[];
    //añadimos el elemento al nuevo array
    newArr.push(element)
    //retornamos los dos array unidos, poniendo el newArr primero
    return newArr.concat(arr)
}


var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2] 