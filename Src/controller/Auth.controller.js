//Require_modules;
const DB = require('../config/config');//Database
const bcrypt = require('bcrypt');


//User_Login_API;
const userlogin = (req, res) => {
    try {
        let Email = req.body.email
        let password = req.body.password
        let FindUser = 'SELECT * FROM `user` WHERE email=?' 

        DB.query(FindUser, Email, async (err, result) => {
            if (err) {
                throw err
            }
            if (result.length === 0) {
                return res.status(404).json({ message: "User not found" });
            }
            else {
                let userPassword = result[0].password
                let Verify = await bcrypt.compare(password, userPassword)
                if (Verify === true) {
                    return res.status(200).json({UserName: result[0].user_name })
                } else {
                    return res.status(401).json({ message: 'Unauthorized' })
                }
            }
        })
    } catch (error) {
        res.status(500).json({ Message: 'Server Issue contect admin' })
    }
}


//Create_new_user API;
const createNewUsers =async (req, res) => {
    try {
        let UserPassword = req.body.password;
        let UserEmail = req.body.email;
        let UserName = req.body.username;
        let OTPSalt = await bcrypt.genSalt(7);
        let OTPHash = await bcrypt.hash(UserPassword, OTPSalt);
        UserPassword = OTPHash;

        let data = {user_name:UserName,email:UserEmail,password:UserPassword}
        let NewUserAdd = 'INSERT INTO `user` SET?'
        let FindUser = 'SELECT * FROM `user` WHERE email=?'
        
        DB.query(FindUser, UserEmail, (err, result) => {
            if (err) {
                throw err
            }
            if (result.length === 0) {
                DB.query(NewUserAdd,data, (err, result) => {
                    if (err) {
                        throw err
                    }
                    else {
                        return res.status(201).json({ Message: 'Successfully add new user' })
                    }
                })
            }
            else {
               return res.status(409).json({ Message: 'Email is already Exist' })
            }
        })
    } catch (error) {
        res.status(500).json({ Message: 'Server Issue' })
    }
}




module.exports = {
    userlogin,
    createNewUsers,
}