const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://anuj_01:FCqhmgqpctavxqVb@cluster0.ghqzqwg.mongodb.net/users_new");

const User = mongoose.model('new_users', { name: String, email: String, password: String,branch: String });

const user1 = new User({ name: 'test', email: "test@gmail.com",password:"123",branch:"Inft" });
user1.save()
console.log("Data entered!!")
return