const express = require("express")
const cors = require("cors")

const app = express();

app.use(cors())

app.get('/todo',(req,res) => {
  res.send("working!!");
})

app.post('/todo/addtask',(req,res) => {
  res.send("task added");
})




app.listen(3000)
