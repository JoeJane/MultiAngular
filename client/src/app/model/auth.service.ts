import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {RestDataSource} from './rest.datasource';
import {JwtHelperService} from '@auth0/angular-jwt';

import {User} from './user.model';
import {Survey} from './survey.model';

@Injectable()
export class AuthService {
  user: User;
  survey: Survey;

  constructor(private datasource: RestDataSource) {
    this.user = new User();
    this.survey = new Survey();
  }

  authenticate(user: User): Observable<any> {
    return this.datasource.authenticate(user);
  }

  register(user: User): Observable<any> {
    return this.datasource.register(user);
  }

  addSurvey(survey: Survey) :Observable<any>
  {
    return this.datasource.addSurvey(survey);
  }

  storeUserData(token: any, user: User): void {
    this.datasource.storeUserData(token, user);
  }

  get authenticated(): boolean {
    return this.datasource.loggedIn();
  }

  logout(): Observable<any> {
    return this.datasource.logout();
  }

}
