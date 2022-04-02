import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
// api base url
BASE_URL: string = 'http://localhost:3000/api';
// Http Header
httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
constructor(private httpClient: HttpClient) {}

// Get all survey
GetSurvey() {
  return this.httpClient.get(`${this.BASE_URL}/survey/surveyList`);
}

// delete survey
deleteSurvey(id: any): Observable<any> {
  let API_URL = `${this.BASE_URL}/survey/delete/${id}`;
  return this.httpClient.get(API_URL, { headers: this.httpHeaders });
}

// Get survey by id
GetSurveyById(id: any): Observable<any> {
  let API_URL = `${this.BASE_URL}/survey/${id}`;
  return this.httpClient.get(API_URL, { headers: this.httpHeaders });
}

// update survey by id
updateSurveyId(id: any, data: any): Observable<any> {
  let API_URL = `${this.BASE_URL}/survey/edit/${id}`;
  return this.httpClient.post(API_URL, data, { headers: this.httpHeaders });
}

// get all survey question
GetSurveyQuestion() {
  return this.httpClient.get(
    `${this.BASE_URL}/surveyQuestions/surveyQuestionsList`
  );
}

// Get survey by id
GetSurveyQuestionById(id: any): Observable<any> {
  let API_URL = `${this.BASE_URL}/surveyQuestions/${id}`;
  return this.httpClient.get(API_URL, { headers: this.httpHeaders });
}

// update survey by id
updateSurveyQuestionById(id: any, data: any): Observable<any> {
  let API_URL = `${this.BASE_URL}/surveyQuestions/edit/${id}`;
  return this.httpClient.post(API_URL, data, { headers: this.httpHeaders });
}

// delete survey
deleteSurveyQuestion(id: any): Observable<any> {
  let API_URL = `${this.BASE_URL}/surveyQuestions/delete/${id}`;
  return this.httpClient.get(API_URL, { headers: this.httpHeaders });
}
}
