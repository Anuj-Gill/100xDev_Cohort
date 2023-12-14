const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs') //A view engine in Express.js allows you to render web pages using template files. These templates are filled with actual data and served to the client.

app.get('/', (req, res) => {
  // res.send('Hello ')
  // res.sendStatus(200)
  // res.status(200).send("hello")
  // res.json({name: "anuj"})       //sending json data(rendering json) //Useful in APi's
  // res.download('index.js')
  res.render("index",{text1:"world"}) //rendering html. This is similar to render_template in flask(jinja). The second parameter can be displayed in the html.
})

const userRouter = require("./routes/user")
// const postRouter = require("./routes/posts") //If there are routes related to post

app.use("/user",userRouter)
// app.use("/posts",userRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})