import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {StoreFirstGuard} from "./guards/storeFirstGuard";
import {RegisterComponent} from "./pages/register/register.component";
import { SurveyQuestionEditComponent } from './pages/survey-question-edit/survey-question-edit.component';
import { SurveyEditComponent } from './pages/survey-edit/survey-edit.component';
import { SurveyQuestionComponent } from './pages/survey-question/survey-question.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { SurveyAddComponent } from './pages/survey-add/survey-add.component';
import { SurveyQuestionsAddComponent } from './pages/survey-question-add/survey-question-add.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'login', data: {title: 'Login'}, redirectTo: '/admin/auth', pathMatch: 'full'},
  {path: 'register', component: RegisterComponent, data: {title: 'Register User'}},
  {path: 'profile/:mode/:id', component: RegisterComponent, data: {title: 'Update User Profile'}, canActivate: [StoreFirstGuard]},
  {path: 'register', component: RegisterComponent, data: {title: 'Register User'}},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m=>m.AdminModule)},
  { path: 'survey', component: SurveyComponent, data: { title: 'Survey' } },
  {
    path: 'survey-edit/:id',
    component: SurveyEditComponent,
    data: { title: 'Survey Edit' },
  },
  {
    path: 'survey-question',
    component: SurveyQuestionComponent,
    data: { title: 'Survey Question' },
  },
  {
    path: 'survey-question-edit/:id',
    component: SurveyQuestionEditComponent,
    data: { title: 'Survey Question Edit' },
  },
  {
    path: 'api/survey/add',
    component: SurveyAddComponent,
    data: { title: 'Survey Management' },
  },
  {
    path: 'api/surveyQuestions/add',
    component: SurveyQuestionsAddComponent,
    data: { title: 'Survey Management' },
  },

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [StoreFirstGuard]
})
export class AppRoutingModule { }
