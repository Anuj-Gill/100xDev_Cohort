const express = require("express")
const {createTodo, updateTodo} = require("./types")
const app = express();

app.get('/todos',(req,res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if(!parsePayload.success){
    res.status(411).json({
      msg:"You sent the wrong inputs"
    })
    return;
  }

})

app.post('/todo',(req,res) => {
  res.send("Post todo")
})

app.put('/completed',(req,res) => {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if(!parsePayload.success){
    res.status(411).json({
      msg:"Entered wrong inputs"
    })
  }
})


app.use(express.json())

app.listen(3000)