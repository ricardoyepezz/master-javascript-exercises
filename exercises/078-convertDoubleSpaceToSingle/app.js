function convertDoubleSpaceToSingle(str) {
    let arr = str.split("  ")
    return arr.join(" ")
}
var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
