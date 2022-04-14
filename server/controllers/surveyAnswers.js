let express = require('express');

//Store the model in a variable
let SurveyAnswers = require('../models/surveyAnswers');

/* GET request for survey */
module.exports.displaySurveyAnswersList = (req, res, next) => {
	SurveyQuestions.find((err, surveyAnswersList) => {
		if (err) {
			return console.error(err);
		} else {
			res.json(surveyAnswersList);
		}
	});
};

/* GET request for create pages - CREATE Operation*/
module.exports.displayAddSurveyAnswersPage = (req, res, next) => {
	res.json({success: true, msg: 'Successfully Displayed Add Survey Answers Page'});
};

/* POST request for add pages - CREATE Operation*/
module.exports.processAddSurveyAnswersPage = (req, res, next) => {
	let newSurveyAnswers = SurveyAnswers({
		userId: req.body.userId,
        questionId: req.body.questionId,
		answer: req.body.answer
	});

	SurveyAnswers.create(newSurveyAnswers, (err, Survey) => {
		if (err) {
			console.log(err);
			res.end(err);
		} else {
			// refresh the survey list
			//res.redirect('/survey/surveyList');
			res.json({success: true, msg: 'Successfully Added New Survey Answers'});
		}
	});
};

/* GET request for survey answers by id */
module.exports.getSurveyAnswersById = (req, res, next) => {
	const id = req.params.id;
	SurveyAnswers.findById(id, (err, surveyAnswersList) => {
		if (err) {
			return console.error(err);
		} else {
			res.json(surveyAnswersList);
		}
	});
};



