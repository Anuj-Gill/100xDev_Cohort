let a = 0;
let stop = 10;

const counter = setInterval(() => {
  if(a <= stop){
    console.clear();
    console.log(a);
    a++;
  } else{
    clearInterval(counter)
  }
},1000);

console.log("below setInterval");