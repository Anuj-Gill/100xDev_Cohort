let evenNums = [];

for (let i = 2; i <= 100 ; i+=2) {
  evenNums.push(i)
}
// console.log(evenNums);

let nums = [12,34,1444,54,3,34,345,324,]
let ans = nums[0]
for(let i = 1; i < nums.length; i++){
  if(nums[i] > ans){
    ans = nums[i]
  }
}

// console.log(ans);

let users = [{
  firstName : "anuj",
  age : 19,
  gender : "male"
},{
  firstName: "bhanuj",
  age: 21,
  gender: "male"
},{
  firstName: "Sumitra",
  age: 45,
  gender: "female"
}]

// console.log(users);
for (let i = 0; i < users.length; i++) {
  if(users[i]["gender"] == "male"){
    console.log(users[i]["firstName"]);
  }
  
}