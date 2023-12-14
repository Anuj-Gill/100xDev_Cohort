const express = require('express')

const router = express.Router();

router.get('/',(req,res) => {
  res.send("User list")
})

router.get('/new',(req,res) => {
  res.send("User new")
})

// router.get("/:id",(req,res) => {   //This is a dynamic route
//   res.send(`Get the user with id: ${req.params.id}`)
// })
// router.put("/:id",(req,res) => {   //This is a dynamic route
//   res.send(`Update the user with id: ${req.params.id}`)
// })
// router.delete("/:id",(req,res) => {   //This is a dynamic route
//   res.send(`Delete the user with id: ${req.params.id}`)
// })
//Instead of writing 3 new lines of op for different methods for the same route

router.route("/:id")
.get((req,res) => {   //This is a dynamic route
  console.log(req.user)
  res.send(`Get the user with id: ${req.params.id}`)
})
.put((req,res) => {   //This is a dynamic route
  res.send(`Update the user with id: ${req.params.id}`)
})
.delete((req,res) => {   //This is a dynamic route
  res.send(`Delete the user with id: ${req.params.id}`)
})

const users = [{name: "anuj"},{name : "gill"}]

//router.param method. This takes in an argument and when it finds that param, it runs the code inside it
router.param("id",(req,res,next,id) => { //This is a middleware, ie which runs between a req from the user and the response send by the user.
  req.user = users[id]
  next();
})

module.exports = router