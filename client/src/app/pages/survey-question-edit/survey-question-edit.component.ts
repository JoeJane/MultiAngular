import { ApiserviceService } from 'src/app/apiservice.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-survey-question-edit',
  templateUrl: './survey-question-edit.component.html',
  styleUrls: ['./survey-question-edit.component.css'],
})
export class SurveyQuestionEditComponent implements OnInit {
  getId: any;
  surveyQuestionUpdateForm!: FormGroup;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private apiService: ApiserviceService,
    public formBuilder: FormBuilder
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    this.apiService.GetSurveyQuestionById(this.getId).subscribe((res) => {
      this.surveyQuestionUpdateForm.setValue({
        question1: res['question1'],
        question2: res['question2'],
        question3: res['question3'],
        question4: res['question4'],
      });
    });
  }

  ngOnInit(): void {
    this.surveyQuestionUpdateForm = this.formBuilder.group({
      question1: [''],
      question2: [''],
      question3: [''],
      question4: [''],
    });
  }

  updateSurveyQuestion() {
    this.apiService
      .updateSurveyQuestionById(this.getId, this.surveyQuestionUpdateForm.value)
      .subscribe(
        () => {
          console.log('Data updated successfully!');
          this.router.navigateByUrl('/survey-question');
        },
        (err) => {
          console.log(err);
        }
      );
  }
}