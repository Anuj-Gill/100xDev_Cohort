const fs = require("fs");
const content = "East or west, India is the best";

fs.writeFile("a.txt",content,"utf-8",(err) => {
  if(err){
    console.log(err)
  } else {
    console.log("Data Written");
  }
})

fs.readFile("a.txt","utf-8",(err,data) => {
  
  console.log(data)
})

for (let i = 0; i < 1000000000; i++) {
  let a = 0;
  a *= i;
}