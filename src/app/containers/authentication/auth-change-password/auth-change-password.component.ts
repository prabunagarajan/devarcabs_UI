import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-change-password',
  templateUrl: './auth-change-password.component.html',
  styleUrls: ['./auth-change-password.component.scss']
})
export class AuthChangePasswordComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  changepasswordform: any;
  formsubmitted: any = false;
  ngOnInit() {
    this.changepasswordform = this.fb.group({
      currentpassword: ['', Validators.required],
      newpassword : ['', Validators.required],
      newpassword2 : ['', Validators.required]
    });
  }
  changepassword(form) {
    this.formsubmitted = true;
    if (form.valid) {
      this.formsubmitted = false;
    }
  }
}
