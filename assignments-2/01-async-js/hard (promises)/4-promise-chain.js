/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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
  const p = new Promise((resolve,reject) => {
    promise1.then(() => {
      const promise2 = wait2(t2*1000);
      promise2.then(() => {
        const promise3 = wait3(t3*1000);
        promise3.then(() => {
          const end = Date.now();
          resolve(end - start)
          
        })
      })
    })

  })
  return p;
  
}

// calculateTime()
// .then((time) => {
//   console.log(time);
// })

module.exports = calculateTime;
