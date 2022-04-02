import { Component, OnInit } from '@angular/core';
import {BasePageComponent} from "../../partials/base-page/base-page.component";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../model/user.model";
import {RestDataSource} from "../../model/rest.datasource";
import {NgForm} from "@angular/forms";
import {AuthService} from "../../model/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  // @ts-ignore
  public errorMessage: string;

  constructor(private auth: AuthService,
              private router: Router,
              activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  save(form: NgForm): void {
    if (form.valid) {
      this.auth.register(this.user).subscribe(data => {
        if(data.success){
          //this.auth.storeUserData(data.token, data.user);
          alert("User created successfully!");
          this.router.navigateByUrl('admin/main');
        } else {
          this.errorMessage = data.msg;
        }
      });
    } else {
      this.errorMessage = 'Please enter valid details';
    }

  }

}
