let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();

//Store the model in a variable
let SurveyQuestions = require('../models/surveyQuestions');

/* GET request for survey */

module.exports.displaySurveyQuestionsList = (req, res, next) => {
	SurveyQuestions.find((err, survey) => {
		if (err) {
			return console.error(err);
		} else {
			res.render('CRUD/survey_questions_list', {
				title: 'Survey Templates',
				Survey: survey,
				//displayName:req.user ? req.user.displayName : ''
			});
		}
	});
};

/* GET request for create page - CREATE Operation*/
module.exports.displayAddSurveyQuestionsPage = (req, res, next) => {
	res.render('CRUD/survey_questions', {
		title: 'Add questions to the survey'
		//displayName: req.user ? req.user.displayName : ''
	});
};

/* POST request for add page - CREATE Operation*/
module.exports.processAddSurveyQuestionsPage = (req, res, next) => {
	let newSurveyQuestions = SurveyQuestions({
		question1: req.body.question1,
		question2: req.body.question2,
		question3: req.body.question3,
		question4: req.body.question4
	});

	SurveyQuestions.create(newSurveyQuestions, (err, Survey) => {
		if (err) {
			console.log(err);
			res.end(err);
		} else {
			// refresh the survey list
			res.redirect('/survey/surveyList');
		}
	});
};

/* GET request for edit page - UPDATE Operation*/
module.exports.displaySurveyQuestionEditPage = (req, res, next) => {
	let id = req.params.id;
	SurveyQuestions.findById(id, (err, surveyQuestion) => {
		if (err) {
			console.log(err);
			res.end(err);
		} else {
			res.render('CRUD/survey_questions_update', {
				title: 'Edit the Survey Question',
				Survey: surveyQuestion,
				// displayName: req.user ? req.user.displayName : '',
			});
		}
	});
};

/* POST request for edit page - UPDATE Operation*/
module.exports.processSurveyQuestionUpdate = (req, res, next) => {
	let id = req.params.id;
	console.log(req.body);
	let updatedSurveyQuestion = SurveyQuestions({
		_id: id,
		question1: req.body.question1,
		question2: req.body.question2,
		question3: req.body.question3,
		question4: req.body.question4,
	});
	console.log('Update Survey Question', updatedSurveyQuestion);
	SurveyQuestions.updateOne({ _id: id }, updatedSurveyQuestion, (err) => {
		if (err) {
			console.log(err);
			res.end(err);
		} else {
			res.redirect('/surveyQuestions/surveyQuestionList');
		}
	});
};

