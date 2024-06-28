import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '@app/services';
import { ResetPasswordService } from '@app/services/reset-password.service';

@Component({
  selector: 'app-auth-change-password-otp',
  templateUrl: './auth-change-password-otp.component.html',
  styleUrls: ['./auth-change-password-otp.component.scss']
})
export class AuthChangePasswordOtpComponent implements OnInit {
  otpForm: any;
  formsubmitted: any = false;
  errorFlag: boolean;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ResetPasswordService,
    private alert: AlertService,
  ) { }

  ngOnInit() {
    this.otpForm = this.fb.group({
      otp: ['', Validators.required]
    });
  }
  saveOtp(form) {
    this.formsubmitted = true;
    if (form.valid) {
      const otpObj = {otp: form.value.otp};
      this.service.verifyOtp(otpObj).subscribe((resp: any) => {
        if (resp.errorCode == '200') {
          sessionStorage.setItem('userId', resp.data);
          this.alert.showSuccess(resp.userDisplayMesg, 'Success');
          this.router.navigate(['/change-password-confirm']);
        } else {
          this.errorFlag = true;
          //this.alert.showError(resp.userDisplayMesg, 'error');
        }
      });
    }
  }
  resendOtp() {
    const obj = {emailId:sessionStorage.getItem('emailId')};
    this.service.resetPassowd(obj).subscribe((resp: any) => {
      if (resp.errorCode == '200') {
        this.alert.showSuccess(resp.userDisplayMesg, 'Success');
      } else {
       // this.alert.showError(resp.userDisplayMesg, 'error');
        // this.errorFlag = true;
      }
    });
  }
}
