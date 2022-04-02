import { Injectable } from '@angular/core';
import { Survey } from './survey.model';
import { StaticDataSource } from './static.datasource';
//import { RestDataSource } from './rest.datasource';

@Injectable()
export class SurveyRepository
{
  private surveys: Survey[] = [];
  //private titles: string[] = [];

  constructor(private dataSource: StaticDataSource)
  {
    dataSource.getSurveys().subscribe(data => {
      this.surveys = data;
      /*this.titles = data.map(p=>p.title)
        .filter((t, index, array) => array.indexOf(t) === index).sort();*/
    });
  }

  getSurveys(): Survey[]
  {
    return this.surveys;
      //.filter(b => author == null || author === b.author);
  }

  getSurvey(id: number): Survey
  {
    return this.surveys.find(s => s._id === id)!;
  }
/*
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
      });
    }
  }
*/
}
