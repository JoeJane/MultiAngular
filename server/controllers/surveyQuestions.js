let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();

//Store the model in a variable
let SurveyQuestions = require('../models/surveyQuestions');

/* GET request for survey */
/*module.exports.displaySurveyList = (req, res, next) => {
    SurveyQuestions.find((err, surveyList) =>{
        if(err){
            return console.error(err);
        }else{
            res.render('CRUD/list', {
                title: 'Survey Templates', 
                Survey: surveyList 
                //displayName:req.user ? req.user.displayName : ''
            })
        }
    });
}*/

/* GET request for create page - CREATE Operation*/
module.exports.displayAddSurveyQuestionsPage = (req, res, next) => {
    res.render('CRUD/survey_questions', {
        title: 'Add questions to the survey' 
        //displayName: req.user ? req.user.displayName : ''
    })          
}

/* POST request for add page - CREATE Operation*/
module.exports.processAddSurveyQuestionsPage = (req, res, next) => {
    let newSurveyQuestions = SurveyQuestions({
        "question1": req.body.question1,
        "question2": req.body.question2,
        "question3": req.body.question3,
        "question4": req.body.question4
    });

    SurveyQuestions.create(newSurveyQuestions, (err, Survey) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the survey list
            res.redirect('/survey/surveyList');
        }
    });

}