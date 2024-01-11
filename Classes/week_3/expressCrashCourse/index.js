const express = require('express')

const app = express();

app.set('view engine', 'ejs') //This is a view engine with which we can see the rendered templates like html. Another view engine in pug.

app.get('/',(req,res) => {
  res.download('index.js') //The file in this will get automatically downloaded when user goes to this endpoint
  // res.status(200).json({msg: "Error"});
  res.render('index',{text1:"World"}) //To render html. All the visible files are stored in a folder named Views. The second argument in the render funtion in the infor to be sent to html and displayed there. it is an object.
})

const userRouter = require('./routes/users')

app.use("/users",userRouter) //This line here defines that for all the routes in the userRouter, they start with /users


app.listen(3000);