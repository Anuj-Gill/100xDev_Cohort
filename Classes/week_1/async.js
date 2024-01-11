function findSum(n) {
  let ans = 0;
  for (let i = 0; i<n; i++) {
    ans += i;
  }
  // console.log(ans);
  return ans;
}

function findSumTill100() {
  return findSum(100);
}

function sleepy(){
  for (let i = 0; i < 10000000000; i++) {
    continue;
    
  }
  return
}


// sleepy()
// setTimeout(findSumTill100, 1000)
setTimeout(function() {
  console.log("I am stuck inside!!");
},1000)
console.log("hello world");