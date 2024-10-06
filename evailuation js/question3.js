function isPalindrome(string){
    const clstr = string.replace(/[^a-z0-9]/gi,'').toLowerCase()
    const revstr = clstr.split('').reverse().join('')
    return clstr === revstr
}
const result = isPalindrome("A man, a plan, a canal, Panama");
console.log(result);
// Output: true

