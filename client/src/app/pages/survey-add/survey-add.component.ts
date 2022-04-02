import { Component, OnInit } from '@angular/core';
import {BasePageComponent} from "../../partials/base-page/base-page.component";
import {ActivatedRoute} from "@angular/router";
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-add',
  templateUrl: './survey-add.component.html',
  styleUrls: ['./survey-add.component.css']
})
export class SurveyAddComponent extends BasePageComponent implements OnInit {

    constructor(route: ActivatedRoute) {
        super(route);
      }

    override ngOnInit(): void {
    }


}