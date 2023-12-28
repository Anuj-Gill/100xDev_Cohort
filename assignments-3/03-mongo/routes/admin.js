const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin,Course} = require('../db/index')
const jwt = require("jsonwebtoken")
const pwd = "secret"


// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username = req.headers.username;
    const password = req.headers.password;
    try{
        const existingAdmin = await Admin.findOne({ username: username });
        // console.log(existingAdmin)
        if (existingAdmin) {
          res.json({ msg: "Admin already exists. Try logging in!!" });
        } 
        else {
            var token = jwt.sign({username: username},pwd);
            console.log(token);
          const admin1 = new Admin({ username: username, password: password });
          await admin1.save();
          res.status(200).json({ msg: "Admin created successfully", token});
        }
    }
    catch(error) {
        res.send(error)
    }

});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic

    try{
            const title = req.body.title; 
            const descp = req.body.description; 
            const price = req.body.price; 
            const imageLink = req.body.imageLink;
            console.log("before course finding")
            const courseCheck = await Course.findOne({title: title})
            console.log("Course check: ",courseCheck)
            if(!(courseCheck)) {
                const course1 = new Course({title:title,description: descp, price:price, imageLink:imageLink});
                await course1.save();
                res.json({msg:"Course added!!"})
            }
            else {
                res.json({msg:"Similar course already exists!!"})
            }
        
        }
    catch(error){
        res.json({msg:error})
    }


});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    try {
        const courses = await Course.find();
        console.log(courses); // Will now log the courses array
        res.json(courses); // Send the courses as the response
      } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error fetching courses" });
      }
});

// module.exports = pwd;
module.exports = router;