function getIndexOf (char, word){
    for (let i=0; i<word.length;i++){
        if (word[i] === char){
            return i
        }
    } return -1

}

var output = getIndexOf('a', 'I am a hacker');
console.log(output);