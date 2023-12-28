// Middleware for handling auth
const {Admin,Course} = require("../db/index");
const jwt = require("jsonwebtoken");
const pwd = "secret";

async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try{
        const username = req.headers.username;
        const password = req.headers.password;
        const token = req.headers.authorization;
        const decoded = jwt.verify(token,pwd);
        const existingAdmin = await Admin.findOne({username: username, password: password});
        // console.log('Exisiting admin',existingAdmin)
        if(existingAdmin && decoded){
            next()
        }
        else {
            res.status(405).json({msg:"You are not allowed to edit or view courses!!"})
        }
    }
    catch(error) {
        res.json(error.message)
    }
}

module.exports = adminMiddleware;