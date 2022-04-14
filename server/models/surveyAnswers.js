let mongoose = require("mongoose");

let surveyAnswersModel = mongoose.Schema(
    {
        userId:
            {
                type: Number,
                default: 1,
                trim: true,
                required: 'userId is required'
            },
        questionId:
            {
                type: Number,
                default: 1,
                trim: true,
                required: 'questionId is required'
            },
        answer:
            {
                type: String,
                default: '',
                trim: true,
                required: 'answer is required'
            }
    },
    {
        collection: "survey_answers"
    }
);

module.exports = mongoose.model('Survey Answers', surveyAnswersModel);

