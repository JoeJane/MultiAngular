let mongoose = require("mongoose");

let surveyQuestionsModel = mongoose.Schema(
    {
        question1:
        {
            questionId: 
            {
                type: Number,
                default: 1,
                trim: true,
                required: 'questionId is required'
            },
            surveyId: 
            {
                type: Number,
                default: 1,
                trim: true,
                required: 'surveyId is required'
            },
            question1: 
            {
                type: String,
                default: '',
                trim: true,
                required: 'question1 is required'
            }
        },
        question2:
        {
            questionId: 
            {
                type: Number,
                default: 1,
                trim: true,
                required: 'questionId is required'
            },
            surveyId: 
            {
                type: Number,
                default: 1,
                trim: true,
                required: 'surveyId is required'
            },
            question2: 
            {
                type: String,
                default: '',
                trim: true,
                required: 'question2 is required'
            }
        },
        question3:
        {
            questionId: 
            {
                type: Number,
                default: 1,
                trim: true,
                required: 'questionId is required'
            },
            surveyId: 
            {
                type: Number,
                default: 1,
                trim: true,
                required: 'surveyId is required'
            },
            question3: 
            {
                type: String,
                default: '',
                trim: true,
                required: 'question3 is required'
            }
        },
        question4:
        {
            questionId: 
            {
                type: Number,
                default: 1,
                trim: true,
                required: 'questionId is required'
            },
            surveyId: 
            {
                type: Number,
                default: 1,
                trim: true,
                required: 'surveyId is required'
            },
            question4: 
            {
                type: String,
                default: '',
                trim: true,
                required: 'question4 is required'
            }
        },
        question5:
        {
            questionId: 
            {
                type: Number,
                default: 1,
                trim: true,
                required: 'questionId is required'
            },
            surveyId: 
            {
                type: Number,
                default: 1,
                trim: true,
                required: 'surveyId is required'
            },
            question5: 
            {
                type: String,
                default: '',
                trim: true,
                required: 'question5 is required'
            }
        },
        question6:
        {
            questionId: 
            {
                type: Number,
                default: 1,
                trim: true,
                required: 'questionId is required'
            },
            surveyId: 
            {
                type: Number,
                default: 1,
                trim: true,
                required: 'surveyId is required'
            },
            question6: 
            {
                type: String,
                default: '',
                trim: true,
                required: 'question6 is required'
            }
        },
        question7:
        {
            questionId: 
            {
                type: Number,
                default: 1,
                trim: true,
                required: 'questionId is required'
            },
            surveyId: 
            {
                type: Number,
                default: 1,
                trim: true,
                required: 'surveyId is required'
            },
            question7: 
            {
                type: String,
                default: '',
                trim: true,
                required: 'question7 is required'
            }
        },
        question8:
        {
            questionId: 
            {
                type: Number,
                default: 1,
                trim: true,
                required: 'questionId is required'
            },
            surveyId: 
            {
                type: Number,
                default: 1,
                trim: true,
                required: 'surveyId is required'
            },
            question8: 
            {
                type: String,
                default: '',
                trim: true,
                required: 'question8 is required'
            }
        },
        question9:
        {
            questionId: 
            {
                type: Number,
                default: 1,
                trim: true,
                required: 'questionId is required'
            },
            surveyId: 
            {
                type: Number,
                default: 1,
                trim: true,
                required: 'surveyId is required'
            },
            question9: 
            {
                type: String,
                default: '',
                trim: true,
                required: 'question9 is required'
            }
        },
        question10:
        {
            questionId: 
            {
                type: Number,
                default: 1,
                trim: true,
                required: 'questionId is required'
            },
            surveyId: 
            {
                type: Number,
                default: 1,
                trim: true,
                required: 'surveyId is required'
            },
            question10: 
            {
                type: String,
                default: '',
                trim: true,
                required: 'question10 is required'
            }
        }
    },
    {
        collection: "survey_questions"
    }
);

module.exports = mongoose.model('Survey Questions', surveyQuestionsModel);

