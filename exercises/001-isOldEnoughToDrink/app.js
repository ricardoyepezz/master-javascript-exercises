function isOldEnoughToDrink(age){
    if ( age >= 21) {
        console.log(`That ${age} years is old enough`);
        return true
    }else {
        console.log(`That ${age} years is not old enough`);
        return false
    }
    // your code here	
}
isOldEnoughToDrink(18)