import { Injectable } from '@angular/core';
import { Survey } from './survey.model';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class SurveyRepository
{
  private surveys: Survey[] = [];

  constructor(private dataSource: RestDataSource)
  {
    dataSource.getSurveys().subscribe(data => {
      this.surveys = data;
    });
  }

  /*getSurveys(author: string = null): Survey[]
  {
    return this.surveys
      .filter(b => author == null || author === b.author);
  }*/

  saveSurvey(savedSurvey: Survey): void
  {
    if (savedSurvey._id === null || savedSurvey._id === 0 || savedSurvey._id === undefined)
    {
      this.dataSource.addSurvey(savedSurvey).subscribe(s => {
        this.surveys.push(savedSurvey);
      });
    }
    else
    {
        console.log('Error adding the survey');
        /*this.dataSource.updateSurvey(savedSurvey).subscribe(survey => {
        this.surveys.splice(this.surveys.findIndex(b => b._id === savedSurvey._id), 1, savedSurvey);
      });*/
    }
  }

}
