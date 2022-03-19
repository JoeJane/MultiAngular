let passport = require("passport");
// create the User Model instance
let userModel = require('../models/user');
let User = userModel.User; // alias
// dummy controller page
module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'Home' });
}