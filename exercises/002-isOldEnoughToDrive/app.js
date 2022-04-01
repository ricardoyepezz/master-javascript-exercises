function isOldEnoughToDrive(age) {
  // your code here
  if (age >= 16){
    console.log(`That ${age} years is old enough`);
    return true
  }else {
    console.log(`That ${age} years is not old enough`);
    return false
  }
}

isOldEnoughToDrive()