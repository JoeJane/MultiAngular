import { Component, OnInit } from '@angular/core';
import {BasePageComponent} from "../../partials/base-page/base-page.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-surveyQuestions',
  templateUrl: './surveyQuestions.component.html',
  styleUrls: ['./surveyQuestions.component.css']
})
export class SurveyQuestionsComponent extends BasePageComponent implements OnInit {

  constructor(route: ActivatedRoute) {
    super(route);
  }

  override ngOnInit(): void {
  }

}