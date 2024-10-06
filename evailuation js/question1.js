let count =  function countVowelsAndConsonants(str){
    let vowel = "aAeEiIoOuU"
    let vCount = 0
    let consonant = 0
    for(let i = 0; i<str.length;i++){
        if (vowel.indexOf(str[i]!== -1)){
            vCount += 1
        }else{
            consonant += 1
        }
    }
    return ` vowels : ${vCount} , consonant : ${consonant}`
}


const result = count("Hello World!");
console.log(result);
// Output: { vowels: 3, consonants: 7 }

