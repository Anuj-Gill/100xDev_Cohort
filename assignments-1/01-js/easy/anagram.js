/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  for(let i = 0; i < str1.length; i++){
    if(str1.length != str2.length){
      return false
    }
    if(str2.includes(str1[i])){
    } else {
      return false;
    }
  }
  return true;
}

// console.log(isAnagram("a !b","b a@"));
module.exports = isAnagram;