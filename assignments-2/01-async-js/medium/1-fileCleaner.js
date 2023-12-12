const fs = require('fs');

let content = "";
fs.readFile("a.txt",'utf-8',(err,data) => {
  if(err){
    console.log(err)
  } else {
    data = data.split(' ');
    console.log(data);
    data.forEach(e => {
      if(e != ''){
        e += ' ';
      }
      content += e;
    });
    // console.log(content)
  }
})

setTimeout(() => {
  fs.writeFile("a.txt",content,(err) => {
    if(err){
      console.log(err);
    } else {
      console.log('Content written');
    }
  })
},1000)