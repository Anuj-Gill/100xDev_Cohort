let a = 0;
const ourTimeout = function() {
  const testing = setTimeout(() => {
    if(a < 20){
      console.clear();
      console.log(a);
      a++;
      ourTimeout();
    } else {
      clearTimeout(testing)
    }
},1000)}

ourTimeout()