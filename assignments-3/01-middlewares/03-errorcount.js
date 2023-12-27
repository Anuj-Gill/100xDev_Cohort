const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let errorCount = 0;
let users = {};
let count = 0;


// You have been given an express server which has a few endpoints.
// Your task is to
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint

function userCheck(req,res,next){
  let id = req.headers["user-id"];
  if(id in users){
    next();
  }
  else {
    errorCount++;
    res.status(404).json({msg: "User does not exists!!"})
  }
}

app.get('/user',userCheck, function(req, res) {
  res.status(200).json({msg: 'user found'});
});

app.post('/user', function(req, res) {
  let userId = Number(req.headers["user-id"]);
  if(userId in users){
    errorCount++;
    res.status(404).json({msg: "User already exists"})
  }
  else {
    users[userId] = count;
    console.log(users)
    res.status(200).json({ msg: `created dummy user ${userId}` });
  }
});

app.get('/errorCount', function(req, res) {
  res.status(200).json({ errorCount });
});


module.exports = app;