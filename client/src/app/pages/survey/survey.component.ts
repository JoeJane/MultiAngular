import { Component, OnInit } from '@angular/core';
import {BasePageComponent} from "../../partials/base-page/base-page.component";
import { SurveyRepository } from '../../model/survey.repository';
import {ActivatedRoute} from "@angular/router";
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent extends BasePageComponent implements OnInit {

    constructor(route: ActivatedRoute) {
        super(route);
      }
  /*constructor(private repository: SurveyRepository,
    private router: Router) { }*/

    override ngOnInit(): void {
    }
    /*ngOnInit(): void {
    }*/

}