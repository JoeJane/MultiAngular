let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let survey = require('../models/surveyQuestions');
let indexController = require('../controllers/index');
let surveyController = require('../controllers/survey');
let surveyQuestionsController = require('../controllers/surveyQuestions');

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/addSurvey', function(req, res, next) {
  res.render('index', { title: 'addSurvey' });
});

router.post('/addSurvey', (req, res, next) => {
     let newSurvey = survey({
      "question1": req.body.question1,
      "question2": req.body.question2,
      "question3": req.body.question3,
      "question4": req.body.question4
  });

  survey.create(newSurvey, (err, survey) =>{
    if(err)
    {
        console.log(err);
        res.end(err);
    }
    else
    {
        res.redirect('/navbar');
    }
});

});*/
/* GET Home page. */
router.get('/', indexController.displayHomePage);
router.get('/home', indexController.displayHomePage);

router.get('/list', surveyController.displaySurveyList);

/* GET request for add page - CREATE Operation*/
router.get('/addSurvey', surveyController.displayAddPage);

/* POST request for add page - CREATE Operation*/
router.post('/addSurvey', surveyController.processAddPage);

/* GET request for add page - CREATE Operation*/
router.get('/surveyQuestion', surveyQuestionsController.displayAddSurveyQuestionsPage);

/* POST request for add page - CREATE Operation*/
router.post('/surveyQuestion', surveyQuestionsController.processAddSurveyQuestionsPage);

module.exports = router;
