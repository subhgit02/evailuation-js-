let reverseWords = function(word){
    return word.split('').reverse().join('')
}
const string = "javascript is fun"
const ans = reverseWords(string.toLowerCase())
console.log(ans)
