// function sum(num1, num2) {
//   let result = num1 + num2;
//   displayResult(result);
// }

// function displayResult(data) {
//   console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//   console.log("Sum's result is : " + data);
// }

// sum(2,5)

// You are only allowed to call one function after this
// How will you displayResult of a sum

function arithmetic(a,b,type){
  console.log(typeof type)
  return type(a,b)
}

function sum(a,b){
  return a + b
}

function minus(a,b){
  return a - b
}

console.log(arithmetic(4,3,sum));
