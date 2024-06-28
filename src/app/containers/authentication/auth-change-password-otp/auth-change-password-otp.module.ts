import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { AuthChangePasswordOtpRoutingModule } from './auth-change-password-otp-routing.module';
import { AuthChangePasswordOtpComponent } from './auth-change-password-otp.component';


@NgModule({
  declarations: [AuthChangePasswordOtpComponent],
  imports: [
    CommonModule,
    SharedModule,
    AuthChangePasswordOtpRoutingModule
  ]
})
export class AuthChangePasswordOtpModule { }
