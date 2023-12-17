const express = require("express");
const app = express();

function authUser(req,res,next) {  //This is a middleware
  const username = req.headers.username;
  const password = req.headers.password;
  console.log(username, password)
  if(username !== "anuj" && password !== "pass"){
    res.status(400).json({"msg":"something wrong with inputs"})
  } else {
    next()
  }
}

function authKidney(req,res,next){   //This is a middleware
  const kidneyId = req.query.kidneyId;
  if(kidneyId != 1 && kidneyId != 2){
    res.status(400).json({"msg": "something wrong with the inputs"});
  } else {
    next();
  }
}

function startTime(req,res,next){
  const time = new Date();
  const startT = time.getMilliseconds();
  // console.log(startT);
  req.startT = startT;
  for (let i = 0; i < 100000000; i++) {
    
  }
  next();

}

function endTime(req,res,next){
  // console.log("endT")
  const startT = req.startT
  const time2 = new Date();
  const endT = time2.getMilliseconds(0);
  // console.log(endT);
  if(startT > endT) {
    req.totalTime = startT - endT;
  } else {
    req.totalTime = endT -startT;
  }
  next();
}

app.use(express.json()) //In this, we define a middleware, now whichever route is called after this statement, this middleware will be called by-default for each route. The express.json() returns a fucntion(middleware(req,res,next))

app.get("/",startTime,endTime,(req,res) => {
  // console.log(req.totalTime)
  res.send(`The server took ${req.totalTime}ms to respond to the http request`)
})

app.get('/health-checkup',authUser,authKidney,(req,res) => {    //In this route, the middlewares are defined as callbacks
  res.json({
    msg: "kidney fine"
  })
});

app.listen(3000)