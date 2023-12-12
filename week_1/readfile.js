const fs = require("fs")

fs.readFile("test.txt","utf-8",(err,data) => {
  console.log(data);
})

console.log("under the file read");  //Here, ideally after printing this, the node goes to the next part which is a for loop, as it will take time as it has a big number, during this the above file would have been read and it should print the file text after it. But this is the catch, as the reading operation is done still it has to wait as the thread is busy computing the for loop. once the for loop is executed, the thread then goes to last console.log and then attends the completed file read system.

let a = 0;
for (let i = 0; i < 100000000; i++) {
  a++;
  
}

console.log("under the for loop");