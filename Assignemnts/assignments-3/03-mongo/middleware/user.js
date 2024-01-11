const {Admin,Course,User} = require("../db/index")

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;
    
    const existingUser = await User.findOne({username: username, password: password});
    // console.log('Exisiting admin',existingAdmin)
    if(existingUser){
        next()
    }
    else {
        res.status(405).json({msg:"You are not allowed to edit or view courses!!"})
    }
}

async function purchasedCheck(req,res,next){
    const id = req.params.courseId;
    const username = req.headers.username;
    const password = req.headers.password;
    const existingUser = await User.findOne({username: username, password: password});
    const purchasedArray = existingUser.purchased;
    let flag = 0;
    for(const value of purchasedArray){
        flag = 0;
        console.log(value);
        if(value == id){
            res.json({msg:"Course already purchased!!"}); 
        }
        else {
            flag = 1;
        }
    }
    if(flag == 1){
        next();
    }
}

module.exports = userMiddleware;
module.exports = purchasedCheck;