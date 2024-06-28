import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { AuthChangePasswordConfirmRoutingModule } from './auth-change-password-confirm-routing.module';
import { AuthChangePasswordConfirmComponent } from './auth-change-password-confirm.component';
import { MustMatchDirective } from '../must-match.directive';

@NgModule({
  declarations: [
    AuthChangePasswordConfirmComponent,
    MustMatchDirective
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthChangePasswordConfirmRoutingModule
  ]
})
export class AuthChangePasswordConfirmModule { }
