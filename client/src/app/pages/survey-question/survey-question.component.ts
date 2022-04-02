import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import {User} from "../../model/user.model";
import {AuthService} from "../../model/auth.service";

@Component({
  selector: 'app-survey-question',
  templateUrl: './survey-question.component.html',
  styleUrls: ['./survey-question.component.css'],
})
export class SurveyQuestionComponent implements OnInit {
  SurveyQuestion: any = [];
  // @ts-ignore
  user: User;

  constructor(private apiService: ApiserviceService,  private authService: AuthService) {}

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

  isLoggedIn(): boolean {
    const result = this.authService.authenticated;
    if (result) {
      // @ts-ignore
      this.user = JSON.parse(localStorage.getItem('user'));
    }

    return result;
  }

}
