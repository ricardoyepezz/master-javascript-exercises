function getElementsGreaterThan10AtProperty (obj, key) {
    arr = []
    for (element in obj[key]){
        if(obj[key][element]>10){
            arr.push(obj[key][element])
        }
    }return arr

}