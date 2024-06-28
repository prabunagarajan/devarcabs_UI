import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';

import { AuthSetPasswordRoutingModule } from './auth-set-password-routing.module';
import { AuthSetPasswordComponent } from './auth-set-password.component';

@NgModule({
  imports: [
    SharedModule,
    AuthSetPasswordRoutingModule
  ],
  declarations: [AuthSetPasswordComponent]
})
export class AuthResetPasswordModule { }
