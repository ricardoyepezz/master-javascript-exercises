function countCharacter(str, char) {
  var letterCount = 0;
  for (var position = 0; position < str.length; position++) {
    if (str.charAt(position) == char) {
      letterCount += 1;
    }
  }
  return letterCount;
}

console.log(countCharacter("hola", "o"));
