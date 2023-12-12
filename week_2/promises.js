// function myOwnSetTimeout(cb, time){
//   setTimeout(cb,time);  //a non promisified function does not return anything, it has callbacks
// }

// myOwnSetTimeout(function(){
//   console.log("Learning async");
// },2000);

function promisifyMyOwnsetTimeout(duration){
  console.log("Inside function! Creating promise --> 2");
    const p = new Promise(function(resolve,reject){          //initializing a promise
    console.log("promise  created, entered in function! -->3");        
    setTimeout(function(){
      console.log("inside timeout, before resolve!");
      // reject();
      resolve();
      console.log("after resolve");
    },duration)
    // resolve()
  });   
  console.log("before return");
  return p;    //in a promisified function, the sender recieves a return on what todo
}

console.log("calling function!--> 1");
const ans = promisifyMyOwnsetTimeout(1000);
ans.then(function(){
  console.log("timeout is done")
})
ans.catch(function() {
  console.log("catching");
})


