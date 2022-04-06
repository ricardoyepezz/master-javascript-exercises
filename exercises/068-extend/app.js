var obj1 = {
  a: 1,
  b: 2,
};
var obj2 = {
  b: 4,
  c: 3,
};

function extend(obj1, obj2) {
  for (var key in obj2) {
    // recorremos obj2
    if (obj1[key]) {
      // vemos si existen keys de obj2 en obj1
      obj1[key]; // si las hay no hacemos nada...
    } else {
      obj1[key] = obj2[key]; // si no hay match añadimos keys de obj2 en obj1
    }
  }
  return obj1; // termina el loop y retornamos obj1
}

console.log(extend(obj1,obj2));
