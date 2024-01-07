const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://anuj_01:nGDApZHDbpU7nOvO@cluster0.enanfp6.mongodb.net/')

console.log("Connected to database");

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
})

const todos = mongoose.model('Todos',todoSchema)

module.exports = {todos}