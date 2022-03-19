let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();

//Store the model in a variable
let Survey = require('../models/survey');

/* GET request for survey */
module.exports.displaySurveyList = (req, res, next) => {
    Survey.find((err, surveyList) =>{
        if(err){
            return console.error(err);
        }else{
            res.render('list', {
                title: 'Survey Templates', 
                Survey: surveyList 
                //displayName:req.user ? req.user.displayName : ''
            })
        }
    });
}

/* GET request for create page - CREATE Operation*/
module.exports.displayAddPage = (req, res, next) => {
    res.render('addSurvey', {
        title: 'Add Survey' 
        //displayName: req.user ? req.user.displayName : ''
    })          
}

/* POST request for add page - CREATE Operation*/
module.exports.processAddPage = (req, res, next) => {
    let newSurvey = Survey({
        "userId": req.body.userId,
        "surveyId": req.body.surveyId,
        "title": req.body.title,
        "description": req.body.description
    });

    Survey.create(newSurvey, (err, Survey) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the survey list
            res.redirect('/list');
        }
    });

}

/* GET request for edit page - UPDATE Operation*/
module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;
    Survey.findById(id,(err, surveyToEdit)=>{
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.render('/edit', {title:'Edit the Survey', Survey: surveyToEdit, displayName:req.user ? req.user.displayName : ''})
        }
    });
}

/* POST request for edit page - UPDATE Operation*/
module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;
    let updatedSurvey = Survey({
        "_id" : id,
        "userId" : req.body.userId,
	    "surveyId" : req.body.surveyId,
	    "title" : req.body.title,
        "description": req.body.description
    })
    Survey.updateOne({_id:id}, updatedSurvey, (err)=>{
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.redirect('/survey/surveyList')
        }
    });
}

/* GET request for delete - DELETE Operation*/
module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;
    Survey.remove({_id:id},(err)=>{
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.redirect('/survey/surveyList');
        }
    });
}