import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Survey } from './survey.model';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

//import { User } from './user.model';

const PROTOCOL = 'https';
const PORT = 3000;

@Injectable()
export class RestDataSource
{
  survey!: Survey;
  baseUrl: string;
  //authToken: string;

  private httpOptions =
  {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor(private http: HttpClient,
              private jwtService: JwtHelperService)
  {
    //this.user = new User();
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/api/`;
    //this.baseUrl = `https://comp229-f2020-week10.herokuapp.com/api/`;
  }

  getSurveys(): Observable<Survey[]>
  {
    return this.http.get<Survey[]>(this.baseUrl + 'survey/surveyList');
  }

  addSurvey(survey: Survey): Observable<Survey>
  {
    //this.loadToken();
    console.log(JSON.stringify(survey));
    return this.http.post<Survey>(this.baseUrl + 'survey/add', survey, this.httpOptions);
  }

/* 

  private loadToken(): void
  {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
  }
  */
}

