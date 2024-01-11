/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    const p = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve();
        },n)
    })
    return p;
}

// const  test = wait(2000)
// test.then(() => {
//     console.log("inside then");
// })


module.exports = wait;
