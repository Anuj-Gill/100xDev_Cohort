//Question 1

function greet(name){
  console.log(`Hello, ${name}`);
}

greet('Gill')


//Question 2
function add(a,b) {
  return a + b
}
console.log(add(3,4));

//Question-3
//Similar to the above questions, nothing new!

//Question 4
//Easy

//Question 5
function pow(base,exp){
  return base ** exp
}
console.log(pow(2,4));

// Question 6
function prime(num){
  for(let i = 2; i < num; i++){
    if(num % i == 0)
      return false;
  }
  return true
}

console.log(prime(32553));


//Question 7
let a = 8;
function glo(){
  console.log(a);
}

function loc(){
  let b = 9;
  console.log(a);
  console.log(b);
}
glo()
loc()
// console.log(b); //This can not be accessed due to local scope

//Question 8
function out(a){
  function innn(){
    return a
  }
  return innn
}

console.log(out(12)())


// Question 9
function fact(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}

console.log(fact(4));

//Question 10
function p2(x){
  return x + 2;
}

function m2(x){
  return 2*x;
}

function comp(x){
  return p2(m2(x))
}

console.log(comp(5));
