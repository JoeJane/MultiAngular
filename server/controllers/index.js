let passport = require("passport");

// enable jwt
let jwt = require('jsonwebtoken');
let DB = require('../config/db');

// create the User Model instance
let userModel = require('../models/user');
let User = userModel.User; // alias

module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        // if server error
        if (err) {
            return res.json({success: false, msg: 'Authentication Error!'});
        }
        // if there is a user login error
        if (!user) {
            return res.json({success: false, msg: 'Authentication Error!'});
        }
        req.login(user, (err) => {
            console.log(err)
            // server error
            if (err) {
                return res.json({success: false, msg: 'Authentication Error!'});
            }

            // create payload
            const payload = {
                id: user._id,
                displayName: user.displayName,
                username: user.username,
                email: user.email
            }

            // sign the payload
            const authToken = jwt.sign(payload, DB.Secret, {
                expiresIn: 604800  // 1 week
            });

            /* Getting ready to convert API*/
            return res.json({success: true, msg: 'User Logged in Successfully!', user: {
                    id: user._id,
                    displayName: user.displayName,
                    username: user.username,
                    email: user.email
                }, token:  authToken});
        });
    })(req, res, next);
}

module.exports.processRegisterPage = (req, res, next) => {
    // instantiate a user object
    console.log("process registration page")

    let newUser = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        displayName: req.body.displayName
    });


    User.register(newUser, req.body.password, (err) => {
        if (err) {
            res.json({success: false, msg: 'Registration Error: User Already Exist!'});
        } else {
            res.json({success: true, msg: 'User Registered Successfully!'});
        }
    })
}

module.exports.performLogout = (req, res, next) => {
    req.logout();
    res.json({success: true, msg: 'User successfully Logged out!'});
}

