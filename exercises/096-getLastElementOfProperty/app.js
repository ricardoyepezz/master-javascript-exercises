// Write your function here
function getLastElementOfProperty (obj,key){
    return obj.key.pop()
}

var obj = {
    key: [1, 2, 5, 7, 4, 3, 9]
};
    var output = getLastElementOfProperty(obj, 'key');
    console.log(output); // --> 5