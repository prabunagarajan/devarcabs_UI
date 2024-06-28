import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '@app/services';
import { ResetPasswordService } from '@app/services/reset-password.service';

@Component({
  selector: 'app-auth-reset-password',
  templateUrl: './auth-reset-password.component.html',
  styleUrls: ['./auth-reset-password.component.scss']
})
export class AuthResetPasswordComponent implements OnInit {
  formsubmitted = false;
  emailPattern = '[a-zA-Z0-9.-]{1,}@[a-zA-Z.-]{2,10}[.]{1}[a-zA-Z]{2,4}';
  errorFlag: boolean;
  constructor( private fb: FormBuilder,
               private service: ResetPasswordService,
               private alert: AlertService,
               private route: Router) { }
  resetform: any;
  ngOnInit() {
    this.resetform = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]]
    });
  }
  get resetPassswordForm() { return this.resetform.controls; }
  reset(form) {
    this.formsubmitted = true;
    if (form.valid) {
      this.formsubmitted = false;
      const payload = {emailId: form.value.email};
      this.service.resetPassowd(payload)
          .subscribe((resp: any) => {
            if (resp.errorCode == '200') {
              sessionStorage.setItem('emailId', form.value.email);
              this.alert.showSuccess(resp.userDisplayMesg, 'Success');
              this.route.navigate(['/change-password-otp']);
            } else {
             // this.alert.showError(resp.userDisplayMesg, 'error');
             this.errorFlag = true;
            }
          });
    }
  }
}
