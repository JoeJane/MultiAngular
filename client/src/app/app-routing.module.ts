import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {SurveyComponent} from "./pages/survey/survey.component";
import {SurveyQuestionsComponent} from "./pages/surveyQuestions/surveyQuestions.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'api/survey/add', component: SurveyComponent, data: {title: 'Survey Management'}},
  {path: 'api/survey/surveyQuestions', component: SurveyQuestionsComponent, data: {title: 'Survey Questions'}},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
