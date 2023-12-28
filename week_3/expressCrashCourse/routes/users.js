const express = require('express')
const router = express.Router()

//Now as every route in this users file is bydefault starting with /users, so what we do is that we don't write the complete endpoint here but when we export them, there we define that these routes has /users endpoint in the starting.

router.get('/',(req,res) => {
  res.send("Users list")
})

router.get('/new',(req,res) => {
  res.send("Users new")
})

router.post('/',(req,res) => {
  const id = res.send('User created');
  res.send("")
})

// router.get('/:id',(req,res) => {  //This is dynamic parameters. We define if any parameter is defined or not at the end of the route
//   const id = req.params.id;
//   res.send(`Get uesr with id ${id}`)
// })

//If we have multiple routes with same end point but different methods.
router.get('/:cost',(req,res) => {
  res.send("Get cost");
})
router.put('/:cost',(req,res) => {
  res.send("Put cost");
})
router.delete('/:cost',(req,res) => {
  res.send("Delete cost");
})
//In the above code, express allows us to chain routes with same endpoint and differet methods

router.
route('/:cost')
.get((req,res) => {
    res.send("Get cost");
  })
.put((req,res) => {
  res.send("Put cost");
})
.delete((req,res) => {
  res.send("Delete cost");
})

//the param middleware
router.param('cost',(req,res,next,cost) => {
  console.log(cost);
  next();
})

module.exports = router