let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();
let passport = require('passport');

let surveyQuestionsController = require('../controllers/surveyQuestions');
const { findByUsername } = require('../models/surveyQuestions');

/*function requireAuth(req,res,next){
    if(!req.isAuthenticated){
        return res.redirect('/login');
    }
    next();
}*/

/* GET request for surveys */
//router.get('/surveyList', surveyQuestionsController.displaySurveyQuestionsList);

/* GET request for add page - CREATE Operation*/
router.get('/', surveyQuestionsController.displayAddSurveyQuestionsPage);

/* POST request for add page - CREATE Operation*/
router.post('/', surveyQuestionsController.processAddSurveyQuestionsPage);

module.exports = router;