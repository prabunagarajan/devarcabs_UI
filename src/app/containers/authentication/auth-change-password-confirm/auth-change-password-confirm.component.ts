import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '@app/services';
import { ResetPasswordService } from '@app/services/reset-password.service';

@Component({
  selector: 'app-auth-change-password-confirm',
  templateUrl: './auth-change-password-confirm.component.html',
  styleUrls: ['./auth-change-password-confirm.component.scss']
})
export class AuthChangePasswordConfirmComponent implements OnInit {
  changePwdObj: any =
  {
    password: '',
    confirmPassword: ''
  };
  formSubmitted: boolean;
  mismatch: string;
  constructor(
    public router: Router,
    private alert: AlertService,
    private service: ResetPasswordService
  ) { }

  ngOnInit() {
  }
  save(changePasswordForm) {
    this.formSubmitted = false;
    if (changePasswordForm.valid === false) {
      this.formSubmitted = true;
    } else {
      const userId = sessionStorage.getItem('userId');
      const payload = {
        id: userId,
        newPassword: this.changePwdObj.password
       };
      this.service.chanagePassword(userId, payload)
      .subscribe((resp: any) => {
        if (resp.errorCode == '200') {
          sessionStorage.setItem('userId', resp.data);
          this.alert.showSuccess(resp.userDisplayMesg, 'Success');
          this.router.navigate(['']);
        } else {
          this.alert.showError(resp.userDisplayMesg, 'error');
        }
      });
  }
}
resetForm() {
  this.changePwdObj = {
    password: '',
    confirmPassword: ''
  };
}
}
