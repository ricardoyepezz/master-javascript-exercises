function isOldEnoughToVote(age) {
  if (age >= 18){
    console.log(`That ${age} years is old enough`);
    return true
  }else {
    console.log(`That ${age} years is not old enough`);
    return false
  }
}
