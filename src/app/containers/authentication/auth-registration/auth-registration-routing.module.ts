import { RegistrationOtpComponent } from './registration-otp/registration-otp.component';
import { AuthRegistrationComponent } from './auth-registration.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: AuthRegistrationComponent
  },
  {
    path: 'registrationotp',
    component: RegistrationOtpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRegistrationRoutingModule { }
