import { AuthRegistrationComponent } from './auth-registration.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRegistrationRoutingModule } from './auth-registration-routing.module';
import { RegistrationOtpComponent } from './registration-otp/registration-otp.component';
import { SharedModule } from '@appThemeShared/shared.module';


@NgModule({
  declarations: [RegistrationOtpComponent, AuthRegistrationComponent],
  imports: [
    CommonModule,
    AuthRegistrationRoutingModule,
    SharedModule
  ]
})
export class AuthRegistrationModule { }
