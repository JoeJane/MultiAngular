import { Component, OnInit } from '@angular/core';
import { Survey } from '../../model/survey.model';
import { SurveyRepository } from '../../model/survey.repository';
import {BasePageComponent} from "../../partials/base-page/base-page.component";
import {ActivatedRoute} from "@angular/router";
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent {

    /*constructor(route: ActivatedRoute) {
        super(route);
      }*/
  constructor(private repository: SurveyRepository,
              private router: Router) { }

    /*override ngOnInit(): void {
    }*/
  /*ngOnInit(): void 
  {
  }
*/
  get surveys(): Survey[]
  {
    return this.repository.getSurveys();
  }

}