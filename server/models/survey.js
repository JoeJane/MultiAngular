let mongoose = require("mongoose");

let surveyModel = mongoose.Schema(
    {
        userId:
            {
                type: Number,
                default: 1,
                trim: true,
                required: 'userId is required'
            },
        surveyId:
            {
                type: Number,
                default: 1,
                trim: true,
                required: 'surveyId is required'
            },
        title:
            {
                type: String,
                default: '',
                trim: true,
                required: 'Title is required'
            },
        description:
            {
                type: String,
                default: '',
                trim: true,
                required: 'Description is required'
            },
        date:
        {
            type: Date,
            default: '',
            trim: true,
            required: 'Date is required'
        }
    },
    {
        collection: "survey"
    }
);

module.exports = mongoose.model('Survey', surveyModel);

