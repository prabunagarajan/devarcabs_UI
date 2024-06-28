import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthChangePasswordOtpComponent} from './auth-change-password-otp.component';

const routes: Routes = [
  {
    path: '',
    component: AuthChangePasswordOtpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthChangePasswordOtpRoutingModule { }
