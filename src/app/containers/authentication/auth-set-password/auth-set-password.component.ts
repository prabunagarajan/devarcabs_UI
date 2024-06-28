import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '@app/services';
import { AuthService } from '@app/services';

import { MustMatch } from '@app/_helpers/must-match.validator';

@Component({
  selector: 'app-auth-reset-password',
  templateUrl: './auth-set-password.component.html',
  styleUrls: ['./auth-set-password.component.scss']
})
export class AuthSetPasswordComponent implements OnInit {
  formsubmitted = false;
  emailPattern = '[a-zA-Z0-9.-]{1,}@[a-zA-Z.-]{2,10}[.]{1}[a-zA-Z]{2,4}';
  errorFlag: boolean;
  resetform: any;
  token: string;

  constructor(
    private fb: FormBuilder,
    private alert: AlertService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
 
      if (params.token) {
        this.token = params.token;
      }
    });
    this.resetform = this.fb.group({
      token: [this.token, Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirm_password')
    });
  }

  get resetPassswordForm() { return this.resetform.controls; }

  async onSubmit() {
    const form = this.resetform;
 
    this.formsubmitted = true;
    if (form.valid) {
      this.formsubmitted = false;
      const payload = form.value;

      const resetPassCusRes: any = await this.authService.passwordReset(payload);
 
      if (resetPassCusRes.responseCode === 200) {
        this.alert.showSuccess(resetPassCusRes.responseMessage, 'Success');
        this.resetform.reset();
        this.router.navigate(['/']);
      } else {
        this.alert.showError(resetPassCusRes.responseMessage, 'error');
      }
      return true;
    }
  }
}
