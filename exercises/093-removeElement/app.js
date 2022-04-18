function removeElement(array, discarder) {
  let newArr = array.filter(function (e) {
    return e !== discarder;
  });
  return newArr;
}
