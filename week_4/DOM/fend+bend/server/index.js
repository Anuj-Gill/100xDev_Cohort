const express = require('express');
const cors = require("cors")
const app = express();

app.use(cors())

app.get("/interest",(req,res) => {
  const p = parseInt(req.query.principal);
  const r = parseInt(req.query.rate);
  const t = parseInt(req.query.time);
  console.log(req.query)
  res.send(`The simple interest is: ${(p*r*t)/100}`)
})

app.listen(3000)