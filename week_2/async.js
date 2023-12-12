//Creating our own async function. Most of the time we would be wrapping around already created async functions to make our own async functions. For ex:

function myOwnSetTimeout(fn, time){
  setTimeout(fn,time);
}

myOwnSetTimeout(function(){
  console.log("Learning async");
},2000);

console.log('outside');