import { NgModule } from "@angular/core";
import { SurveyRepository } from './survey.repository';
import {HttpClientModule} from "@angular/common/http";
import {RestDataSource} from "./rest.datasource";
import {AuthService} from "./auth.service";

@NgModule({
  imports: [HttpClientModule],
  providers: [RestDataSource, AuthService, SurveyRepository, StaticDataSource, {provide: StaticDataSource, useClass: RestDataSource}]
})
export class ModelModule{}
