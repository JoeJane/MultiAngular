// require modules for the index pages
let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');
let surveyController = require('../controllers/survey');
let surveyQuestionsController = require('../controllers/surveyQuestions');


/* GET Home pages. */
//router.get('/', indexController.displayHomePage);
//router.get('/home', indexController.displayHomePage);

// GET Route for displaying Login pages
//router.get('/login', indexController.displayLoginPage);

// POST Route for processing Login pages
router.post('/login', indexController.processLoginPage);

// GET Route for displaying Register pages
//router.get('/register', indexController.displayRegisterPage);

// POST Route for processing Register pages
router.post('/register', indexController.processRegisterPage);

// GET to perform User Logout
router.get('/logout', indexController.performLogout);

module.exports = router;
