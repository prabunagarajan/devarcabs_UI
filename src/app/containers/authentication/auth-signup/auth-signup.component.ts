import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { ApiService } from '@app/services';
@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss']
})
export class AuthSignupComponent implements OnInit {
  formsubmitted: any = false;

  constructor(private fb: FormBuilder,
              private loginservice: LoginService,
              private router: Router, private apiservice: ApiService) { }
  signupform: any;
  ngOnInit() {
    this.signupform = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
signup(form) {
this.formsubmitted = true;
if (form.valid) {
  this.formsubmitted = false;
  const data = {
    mail : form.value.email,
    username : form.value.username,
    password : form.value.password
  };
  const posting = `users?bypassAuth=true`;
  this.apiservice.post(posting, data).then((resp: any) => {
    if (resp) {
      this.router.navigate(['/auth/signin']);
    }
  });
}
}
}
