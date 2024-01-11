let start = 30;
const timer = setInterval(() => {
  console.log(start);
  start--;
  if(start == -1){
    clearInterval(timer)
  }
},1000)