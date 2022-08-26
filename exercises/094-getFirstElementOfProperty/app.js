// Write your function here
function getFirstElementOfProperty (obj,key){
    return obj.key.shift()
}

var obj = {
    key: [7, 2, 4]
  };
  var output = getFirstElementOfProperty(obj, 'key');
  console.log(output);
