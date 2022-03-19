let mongoose = require("mongoose");

let surveyQuestionsModel = mongoose.Schema(
    {
        question1:
            {
                type: String,
                default: '',
                trim: true,
                required: 'question1 is required'
            },
        question2:
            {
                type: String,
                default: '',
                trim: true,
                required: 'question2 is required'
            },
        question3:
            {
                type: String,
                default: '',
                trim: true,
                required: 'question3 is required'
            },
        question4:
            {
                type: String,
                default: '',
                trim: true,
                required: 'question4 is required'
            }
    },
    {
        collection: "survey_questions"
    }
);

module.exports = mongoose.model('Survey Questions', surveyQuestionsModel);