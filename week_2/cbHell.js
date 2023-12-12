setTimeout(function(){
  console.log('hi there');
  setTimeout(function(){
    console.log('hi there again');
  },2000)
},1000)