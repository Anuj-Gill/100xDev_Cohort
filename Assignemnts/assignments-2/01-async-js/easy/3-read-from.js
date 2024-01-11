const fs = require("fs");

// fs.readFile("a.txt","utf-8",(err,data) => {
  
//   console.log(data)
// })

console.log(fs.readFileSync('a.txt','utf-8'));

for (let i = 0; i < 1000000000; i++) {
  let a = 0;
  a *= i;
}

console.log("async testing")