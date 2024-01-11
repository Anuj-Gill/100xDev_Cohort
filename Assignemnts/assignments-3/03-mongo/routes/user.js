const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const purchasedCheck = require("../middleware/user");
const {Admin, User,Course} = require("../db/index");


// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.headers.username;
    const password = req.headers.password;
    try{
        const existingUser = await User.findOne({ username: username });
        // console.log(existingAdmin)
        if (existingUser) {
          res.json({ msg: "User already exists. Try logging in!!" });
        } else {
          const user = new User({ username: username, password: password });
          await user.save();
          res.status(200).json({ msg: "User created successfully" });
        }
    }
    catch(error) {
        res.send(error)
    }
});

router.get('/courses', userMiddleware ,async (req, res) => {
    // Implement listing all courses logic
    try {
        const courses = await Course.find();
        // console.log(courses); // Will now log the courses array
        res.json(courses); // Send the courses as the response
      } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error fetching courses" });
      }
});

router.post('/courses/:courseId', userMiddleware, purchasedCheck, async(req, res) => {
    // Implement course purchase logic
        const id = req.params.courseId;
        console.log(typeof id)
        const course = await Course.findOne({_id: id});
        console.log(course)
        const username = req.headers.username;
        const password = req.headers.password;
        const existingUser = await User.findOne({username: username, password: password});
        if(course){
            existingUser.purchased.push(id);
            await existingUser.save();
            res.json({msg: `Course with id: ${id} purchased successfully!!`})
        }
        else {
            res.json({msg:"No such course!!"})
        }
    
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const id = req.params.courseId;
    const username = req.headers.username;
    const password = req.headers.password;
    const existingUser = await User.findOne({username: username, password: password});
    const purchasedArray = [];
    const purchasedIds = existingUser.purchased;
    for(const value of purchasedIds){
        const course = await Course.findOne({_id: value});
        purchasedArray.push(course);
    }
    res.send(purchasedArray)
});

module.exports = router