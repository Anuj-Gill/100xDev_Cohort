// Question 1
for (let a = 1; a < 11; a++) {
  // console.log(a);
}


// Question 2
for(let a = 2; a < 21; a+=2){
  // console.log(a);
}

//Question 3
// easy

//Question 4
let sum = 0;
for (let index = 1; index < 6; index++){
  sum += index;
}
// console.log(sum);

//Question 5
let base = 2;
for (let a = 1; a < 7; a++) {
  // console.log(base**a);
}


//Question 6
//To be executed on client side console
// let correctNum = 9;
// let guess;
// do{
//     guess = parseInt(prompt("Enter a number between 0-10"));
//     if(guess === correctNum){
//         alert("You guessed it right!!");
//     }
//     else{
//         alert("Hard luck! Try it again");
//     }
    
// } while(guess != correctNum)



//Question 7
for(let a = 1; a < 11; a ++){
  for(let b = 1; b < 11; b++){
    // console.log(a*b);
  }
}


//Question 8
let i = 0
while(i >= 0){
  if(i == 5){
    break
  }
  if(i == 3){
    i++;
    continue
  }
  // console.log(i)
  i++;
}


//Question 9
for(let i = 0; i < 31; i++){
  if(i % 3 == 0 && i % 5 == 0 && i != 0){
    console.log("fizzbuzz");
    continue
  }
  if(i % 3 == 0 && i != 0){
    console.log("fizz");
    continue
  }
  if(i % 5 == 0 && i != 0){
    console.log("buzz");
    continue
  }
  console.log(i);
}
//Question 10
//easy

