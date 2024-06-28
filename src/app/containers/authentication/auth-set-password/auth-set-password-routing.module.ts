import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthSetPasswordComponent } from './auth-set-password.component';

const routes: Routes = [
  {
    path: ':token',
    component: AuthSetPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthSetPasswordRoutingModule { }
