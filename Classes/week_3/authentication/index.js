const express = require("express");
const jwt = require("jsonwebtoken"); //new library
const jwtPassword = "12345";

const app = express();

app.use(express.json())

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(gusername, gpassword) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  // for(let i = 0; i < ALL_USERS.length; i++){
  //   if(ALL_USERS[i].username === gusername && ALL_USERS[i].password === gpassword){
  //     return true;
  //   }
  // }
  // return false;
  //Using find()
  let result = false;
  ALL_USERS.find(e => {
    if(e["username"] == gusername && e["password"] == gpassword){
      result = true;
    }
  })
  return result
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  console.log(username)
  console.log(password)

  console.log(userExists(username, password))
  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  console.log(token)
  return res.json({
    token,
  });
  // res.send("User exists")
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    console.log(decoded)
    const username = decoded.username;
    console.log(username)
    // return a list of users other than this username
    res.json({
      users: ALL_USERS.filter(e => {
        if(e.username === username)
          return false
        else
          return true
      })
    })
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000)