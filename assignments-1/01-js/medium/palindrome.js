/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  newStr = str.toLowerCase().replace(/[^a-zA-Z]/g,'');
  for(let i = 1; i < newStr.length / 2;i++){
    if(newStr[i - 1] == newStr[newStr.length - i])
      continue;
    else
      return false
  }
  return true;
}

console.log(isPalindrome('Malayalam'));

module.exports = isPalindrome;
