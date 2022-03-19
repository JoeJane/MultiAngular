// require modules for the index page
let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');
let surveyController = require('../controllers/survey');
let surveyQuestionsController = require('../controllers/surveyQuestions');

/* GET Home page. */
router.get('/', indexController.displayHomePage);
router.get('/home', indexController.displayHomePage);

// GET Route for displaying Login page
router.get('/login', indexController.displayLoginPage);

// POST Route for processing Login page
router.post('/login', indexController.processLoginPage);

// GET Route for displaying Register page
router.get('/register', indexController.displayRegisterPage);

// POST Route for processing Register page
router.post('/register', indexController.processRegisterPage);

// GET to perform User Logout
router.get('/logout', indexController.performLogout);


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
