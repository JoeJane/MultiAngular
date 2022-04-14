import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Survey } from 'src/app/model/survey.model';
import {AuthService} from "../../model/auth.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-add-survey',
  templateUrl: './add-survey.component.html',
  styleUrls: ['./add-survey.component.css']
})
export class AddSurveyComponent implements OnInit {

  survey: Survey = new Survey();
  constructor(private auth: AuthService,
    activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  save(form: NgForm): void {
    if (form.valid) {
      this.auth.addSurvey(this.survey).subscribe(data => {
        if(data.success){
          alert("Survey Added");
          //this.router.navigateByUrl('admin/main');
        } else {
          alert("Error in Survey Added");
        }
      });
    }

  }

}
