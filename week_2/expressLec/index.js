const express = require("express")
const app = express();

let users = [{
  name: "gill",
  kidneys: [{
    healthy: false
  },{
    healthy: true
  }]
}]

app.use(express.json())

// console.log(users[0]["kidneys"][0]["healthy"])
app.get("/",(req,res) => {
  let numhealthy = 0;
  let numUnhealthy = 0;
  for(let i = 0; i < users[0]["kidneys"].length; i++){
    if(users[0]["kidneys"][i]["healthy"] === true){
      numhealthy += 1;
      console.log(numhealthy);
    } 
    // else if(users[0]["kidneys"][i]["healthy"] === true && i === 1) {
    //   numhealthy += 1;
    //   console.log(numhealthy);

    // } 
    else {
      numUnhealthy += 1;
      console.log(numUnhealthy);

    }

  }
  res.send(`<h3>You have ${users[0]["kidneys"].length} kidneys.\n Number of healthy kidney's is ${numhealthy} and number of Unhealthy kidney's is ${numUnhealthy}<\h3>`);
})

app.post("/",(req,res) => {
  console.log(req.body["isHealthy"]);
  const kidneyStatus = req.body["isHealthy"];
  users[0]["kidneys"].push({
    healthy: kidneyStatus
  })
  console.log(users[0])
  res.send("Work done!!")
})

app.put("/",(req,res) => {
  for(let i = 0; i < users[0]["kidneys"].length; i++){
    users[0]["kidneys"][i]["healthy"] = true;
  }
  res.send("All kidneys are now healthy!")
})

app.delete("/",(req,res) => {
  users[0]["kidneys"] = users[0]["kidneys"].filter((e) => {
    return e["healthy"] === true;
  })
  
  // console.log(healthyUser);
  res.send("Unhealthy kidneys deleted!!")
})


app.listen(3000);