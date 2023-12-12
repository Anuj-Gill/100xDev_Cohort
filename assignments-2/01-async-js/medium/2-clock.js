const time = new Date();

let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();
// console.log(typeof seconds)




const counter = setInterval(() => {
  if(seconds < 59 && minutes < 59){
    console.clear();
    console.log(hours+":"+minutes+":"+seconds)
    seconds++;
  } else if(seconds === 59 && (minutes < 60 && minutes != 0)){
    console.clear();
    console.log(hours+":"+minutes+":"+seconds)
    minutes++;
    seconds = 0;
  } else if(seconds === 59 && minutes === 59) {
    console.clear();
    seconds = 0;
    minutes = 0;
    hours++;
    console.log(hours+":"+minutes+":"+seconds)
  }
},1000);