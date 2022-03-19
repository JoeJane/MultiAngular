let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();
let passport = require('passport');

let surveyController = require('../controllers/survey');
const { findByUsername } = require('../models/survey');

/*function requireAuth(req,res,next){
    if(!req.isAuthenticated){
        return res.redirect('/login');
    }
    next();
}*/

/* GET request for surveys */
router.get('/list', surveyController.displaySurveyList);

/* GET request for add page - CREATE Operation*/
router.get('/add', surveyController.displayAddPage);

/* POST request for add page - CREATE Operation*/
router.post('/add', surveyController.processAddPage);

/* GET request for edit page - UPDATE Operation*/
//router.get('/edit/:id', requireAuth, contactsController.displayEditPage);
router.get('/edit/:id', surveyController.displayEditPage);

/* POST request for edit page - UPDATE Operation*/
//router.post('/edit/:id', requireAuth, contactsController.processEditPage);
router.post('/edit/:id', surveyController.processEditPage);

/* GET request for delete - DELETE Operation*/
//router.get('/delete/:id', requireAuth, contactsController.performDelete);
router.get('/delete/:id', surveyController.performDelete);


module.exports = router;