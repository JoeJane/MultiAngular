let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();
let passport = require('passport');

let surveyAnswersController = require('../controllers/surveyAnswers');
const { findByUsername } = require('../models/surveyAnswers');

/* GET request for surveys - Get all Survey Answers */
router.get('/surveyAnswersList', surveyAnswersController.displaySurveyAnswersList);

/* GET request for add pages - CREATE Operation*/
router.get('/add', surveyAnswersController.displayAddSurveyAnswersPage);

/* POST request for add pages - CREATE Operation*/
router.post('/add', surveyAnswersController.processAddSurveyAnswersPage);


/* GET request for surveys - Get all Survey Answers */
router.get('/:id', surveyAnswersController.getSurveyAnswersById);

module.exports = router;


