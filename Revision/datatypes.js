//Question 1:

// Importing the readline module for taking userinput
const readline = require('readline').createInterface({
  input : process.stdin,
  output : process.stdout
})

// readline.question('Enter distance in km: ', distance => {
//   console.log('Distance in meters: ' + distance*1000 + ' m');
//   console.log('Distance in Centimeters: ' + distance*100000 + ' cm');
//   readline.close();
// })

//Question 2:

// readline.question("Enter radius: ", radius => {
//   console.log(3.14*radius*radius+ ' sq units');
//   readline.close();
// })

//Question 3:

// readline.question("Enter first number: ",num1 => {
//   num1 = parseInt(num1);
//   readline.question("Enter second number: ",num2 => {
//     num2 = parseInt(num2);
//     console.log(num1 + num2);
//     readline.close();
//   })
// })

//Question 4:

// readline.question("Enter marks in first subject: ", marks1 => {
//   marks1 = parseInt(marks1);
//   readline.question("Enter marks in second subject: ",marks2 => {
//     marks2 = parseInt(marks2);
//     console.log((marks1 + marks2) / 2 + "%");
//     readline.close();
//   })
// })

// Question 5:
// readline.question("Enter length: ", length => {
//   length = parseInt(length);
//   readline.question("Enter breadth: ",breadth => {
//     breadth = parseInt(breadth);
//     console.log("Area: " + (length * breadth)  + " sq units");
//     console.log("Perimeter: " + 2*(length + breadth));
//     readline.close();
//   })


//Question 6

nums = [1,2,3,4,5]
let sum = 0;
nums.forEach(n => {
  sum += n
});

console.log(sum/nums.length)
