import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {HomeComponent} from "./home/home.component";
import {PartialsModule} from "../partials/partials.module";
import {RegisterComponent} from "./register/register.component";

import { SurveyComponent } from './survey/survey.component';
import { SurveyQuestionComponent } from './survey-question/survey-question.component';
import { HttpClientModule } from '@angular/common/http';
import { SurveyEditComponent } from './survey-edit/survey-edit.component';
import { SurveyQuestionEditComponent } from './survey-question-edit/survey-question-edit.component';
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [BrowserModule, FormsModule, PartialsModule, ReactiveFormsModule,
    HttpClientModule,
    RouterModule],
  
  declarations: [HomeComponent, RegisterComponent, SurveyComponent,
    SurveyQuestionComponent,
    SurveyEditComponent,
    SurveyQuestionEditComponent],

  exports: [HomeComponent, PartialsModule]
})
export class PagesModule{}
