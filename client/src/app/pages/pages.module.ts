import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import {HomeComponent} from "./home/home.component";
import {PartialsModule} from "../partials/partials.module";
import {SurveyComponent} from "./survey/survey.component";
import {SurveyQuestionsComponent} from "./surveyQuestions/surveyQuestions.component";

@NgModule({
  imports: [BrowserModule, FormsModule, PartialsModule],
  declarations: [HomeComponent, SurveyComponent, SurveyQuestionsComponent],
  exports: [HomeComponent, PartialsModule, SurveyComponent, SurveyQuestionsComponent]
})
export class PagesModule{}
