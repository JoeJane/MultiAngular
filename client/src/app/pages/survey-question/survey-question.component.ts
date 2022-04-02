import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-survey-question',
  templateUrl: './survey-question.component.html',
  styleUrls: ['./survey-question.component.css'],
})
export class SurveyQuestionComponent implements OnInit {
  SurveyQuestion: any = [];
  constructor(private apiService: ApiserviceService) {}

  ngOnInit(): void {
    this.apiService.GetSurveyQuestion().subscribe((res) => {
      console.log(res);
      this.SurveyQuestion = res;
    });
  }

  deleteSurveyQuestion(id: any, i: any) {
    console.log(id);
    if (window.confirm('Do You Want Delete?')) {
      this.apiService.deleteSurveyQuestion(id).subscribe(() => {
        this.SurveyQuestion.splice(i, 1);
      });
    }
  }
}
