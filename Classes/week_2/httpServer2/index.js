const express = require("express")
const bodyParser = require("body-parser")

const app = express()
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/testing',(req,res) => {
  let token = req.headers["authorization"];
  console.log(token)
  // console.log(req.params)
  console.log(req.query.param1) //We access the params by query
  console.log(req.body)
  if(token === "22101A0016"){
    res.send("Hey gill, how are you??")
  } else {
    res.send("Wait!! you are not gill.")
  }
  // res.send('started testing')
})

app.get('/',(req,res) => {
  res.send("hello there")
})

app.listen(port,() => [
  console.log("listening")
])