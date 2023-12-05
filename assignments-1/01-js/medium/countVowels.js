/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // let vowels = ['a','e','i','o','u'];
  ques = str.toLowerCase();
  let count = 0;
  let test = ques.split('');
  // console.log(test);
  test.forEach(e => {
    if(vowels.includes(e)){
      count++
    }
  });
  return count;
}

console.log(countVowels("anUj Gill"));

module.exports = countVowels;