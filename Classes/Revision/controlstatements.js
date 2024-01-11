const readline = require('readline').createInterface({
  input:process.stdin,
  output:process.stdout
})

//Question-1
let x = 9;
if(x > 10)
  console.log("x is greater than 10!")
else
  console.log('x is not greater than 10!')

// Question-2
readline.question('Enter your age!',age => {
  if(age > 18)
    console.log("You are eligible to drive")
  else
  console.log("You are not eligible to drive")
  readline.close();
})

//Question-3
// similar to 2nd one

//Question-4
//Nothing new, same as above

// Question-5
readline.question("Enter a number between 0-6: ",num => {
  switch (parseInt(num)) {
    case 0:
      console.log("Sunday!");
      break;
    case 1:
      console.log("Monday!");
      break;
    case 2:
      console.log("Tuesday!");
      break;
    case 3:
      console.log("Wednesday!");
      break;
    case 4:
      console.log("Thrusday!");
      break;
    case 5:
      console.log("Friday!");
      break;
    case 6:
      console.log("Saturday!");
      break;
    default:
      break;
  }
  readline.close();
})

// Question-7
readline.question('Enter a or b or c: ',x => {
  switch(x){
    case 'a':
      console.log("Apple");
      break;
    case 'b':
      console.log("Banana");
      break;
    case 'c':
      console.log("Chiku");
      break;
    default:
      console.log("Enter only a,b or c!!")
  }
  readline.close();
})

// Question-8
readline.question("Enter temperature: ",temp => {
  temp = parseInt(temp)
  if(temp > 35)
    console.log('High')
  else if(temp > 15 & temp < 35)
    console.log("Medium")
  else
    console.log("Low")
  console.log(temp)
  readline.close();
})

// Question-9
// similar to the above question

// Question-10
readline.question("Enter username: ",user => {
  if(user.length < 6){
    console.log("Username too short!!")
  }
  else if(user.length > 15){
    console.log("Username too long!!")
  }
  else {
    console.log("Username accepted!!")
  }
  readline.close();
})