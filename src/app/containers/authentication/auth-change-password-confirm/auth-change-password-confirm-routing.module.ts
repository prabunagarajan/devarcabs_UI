import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthChangePasswordConfirmComponent} from './auth-change-password-confirm.component';

const routes: Routes = [
  {
    path: '',
    component: AuthChangePasswordConfirmComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthChangePasswordConfirmRoutingModule { }
