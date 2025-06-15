const palindrome = (str) => str === str.split("").reverse().join("");
console.log(palindrome("abcba")); //true
