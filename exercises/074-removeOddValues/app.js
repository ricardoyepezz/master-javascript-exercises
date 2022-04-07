function removeOddValues(obj) {
    for (let key in obj){
        if (obj[key]%2 !== 0){
            delete obj[key]
        }
    } return obj

}