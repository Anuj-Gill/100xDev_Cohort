const express = require("express")
const {createTodo, updateTodo} = require("./types");
const {todos} = require('./db');
const cors = require("cors")
const app = express();


app.use(express.json());
app.use(cors())

app.post('/todos',async (req,res) => {
  const createPayload = await req.body;
  // console.log(typeof createPayload)
  const parsePayload = createTodo.safeParse(createPayload);
  // console.log(parsePayload.error)
  if(!parsePayload.success){
    res.status(411).json({
      msg:"You sent the wrong inputs"
    })
    return;
  }
  // const task = new todos({title: createPayload.title, description: createPayload.description, completed: createPayload.completed });
  // await task.save();
  await todos.create({title: createPayload.title, description: createPayload.description, completed: createPayload.completed})
  res.status(200).json({
    msg:"Task added successfully!!"
  })


})

app.get('/todo',async (req,res) => {
  try{
    const todoList = await todos.find();
    res.json(todoList)
  }
  catch(error){
    res.send(Error)
  }
})

app.put('/completed',async (req,res) => {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if(!parsePayload.success){
    res.status(411).json({
      msg:"Entered wrong inputs"
    })
  }
  await todos.updateOne({
    _id: req.body.id
  }, {
    completed: true
  })
  res.json({
    msg: "Todo marked as completed!!"
  })
})


app.use(express.json())

app.listen(3000)