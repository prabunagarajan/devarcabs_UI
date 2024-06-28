import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'signup',
        loadChildren: () => import('./auth-signup/auth-signup.module').then(module => module.AuthSignupModule)
      },
      {
        path: 'reset-password',
        loadChildren: () => import('./auth-reset-password/auth-reset-password.module').then(module => module.AuthResetPasswordModule)
      },
      {
        path: 'password',
        loadChildren: () => import('./auth-set-password/auth-set-password.module').then(module => module.AuthResetPasswordModule)
      },
      {
        path: 'change-password',
        loadChildren: () => import('./auth-change-password/auth-change-password.module').then(module => module.AuthChangePasswordModule)
      },
      {
        path: 'signin',
        loadChildren: () => import('./auth-signin/auth-signin.module').then(module => module.AuthSigninModule)
      },
      {
        path: 'grievance_registration',
        loadChildren: () => import('./applicantregistration/applicantregistration.module').then(m => m.ApplicantregistrationModule)
      },
      {
        path: '',
        loadChildren: () => import('./auth-signin/auth-signin.module').then(module => module.AuthSigninModule)
      },
      // {
      //   path: 'registration',
      //   loadChildren: () => import('./auth-registration/auth-registration.module').then(module => module.AuthRegistrationModule)
      // },
      {
        path: 'pass-permit-online-registretion',
        loadChildren: () => import('./pass-permit-online-registretion/pass-permit-online-registretion.module')
          .then(module => module.PassPermitOnlineRegistretionModule)
      },
      {
        path: 'change-password-otp',
        loadChildren: () => import('./auth-change-password-otp/auth-change-password-otp.module')
          .then(module => module.AuthChangePasswordOtpModule)
      },
      {
        path: 'change-password-confirm',
        loadChildren: () => import('./auth-change-password-confirm/auth-change-password-confirm.module')
          .then(module => module.AuthChangePasswordConfirmModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
