import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Survey } from 'src/app/model/survey.model';
import { AuthService } from '../../model/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-survey',
  templateUrl: './add-survey.component.html',
  styleUrls: ['./add-survey.component.css'],
})
export class AddSurveyComponent implements OnInit {
  survey: Survey = new Survey();
  constructor(private auth: AuthService, activeRoute: ActivatedRoute) {}
  userId: any = '';
  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if (user) {
      const userInfo = JSON.parse(user);
      this.userId = userInfo._id;
    }
  }

  save(form: NgForm): void {
    if (form.valid) {
      const surveyData = {
        userId: this.userId,
        title: this.survey.title,
        description: this.survey.description,
      };
      console.log('Survey Form ', surveyData);
      this.auth.addSurvey(surveyData).subscribe((data) => {
        if (data.success) {
          alert('Survey Added');
          form.resetForm();
          // this.router.navigateByUrl('admin/main');
        } else {
          alert('Error in Survey Added');
        }
      });
    }
  }
}
