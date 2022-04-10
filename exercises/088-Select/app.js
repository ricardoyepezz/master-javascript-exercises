function select (arr, obj){
    newObj = {}
    //recorre obj y arr
    for (let key in obj){
        for ( let i = 0; i< arr.length; i++){
            //si hay un valor en arr igual a un valor de obj 
            if (arr[i]== key){
                //añadimos ese valor key a newObj
                newObj[key] = obj[key]
            }
        }
    } return newObj
}