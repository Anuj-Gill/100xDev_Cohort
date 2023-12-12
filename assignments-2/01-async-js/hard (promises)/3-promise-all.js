/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    },t)
  })
  return promise1;
}

function wait2(t) {
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      
    }, t);
  })
  return promise2;

}

function wait3(t) {
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      
    }, t);
  })
  return promise3;

}

function calculateTime(t1, t2, t3) {
  const start = Date.now();
  // console.log(start);
  const promise1 = wait1(t1*1000);
  const promise2 = wait2(t2*1000);
  const promise3 = wait3(t3*1000);
  const p = new Promise((resolve,reject) => {
    Promise.all([promise1,promise2,promise3])
    .then(() => {
      const end = Date.now();
      // console.log(end);
      resolve(end-start);
    })

  })
  return p;
  
}

// calculateTime()
// .then((time) => {
//   console.log(time);
// })

module.exports = calculateTime;
