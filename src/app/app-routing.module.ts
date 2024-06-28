import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '@appThemeLayout/admin/admin.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';
import { AuthGuardService } from '@appServices/auth-guard.service';
import { WelcomeComponent } from './containers/welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/authentication/signin', pathMatch: 'full' },
  {
    path: 'authentication',
    loadChildren: () => import('./containers/authentication/authentication.module')
      .then(m => m.AuthenticationModule)
  },
  // {
  //   path: 'grievance-reg',
  //   loadChildren: () => import('./containers/grievance-registration/grievance-registration.module')
  //     .then(m => m.GrievanceRegistrationModule)
  // },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard/analytics',
        pathMatch: 'full'
      },
      {
        path: 'welcome',
        canActivate: [AuthGuardService],
        component: WelcomeComponent
      },

      {
        path: 'helpdesk',
        canActivate: [AuthGuardService],
        loadChildren: () => import('./containers/helpdesk/helpdesk.module').then(m => m.HelpdeskModule)
      },
      {
        path: 'helpdeskmaster',
        canActivate: [AuthGuardService],
        loadChildren: () => import('./containers/helpdeskmaster/helpdeskmaster.module').then(m => m.HelpDeskMastersModule)
      },

      {
        path:'devar-cabs',
        loadChildren:()=>import('./containers/devar-cabs/devar-cabs.module').then(module=>module.DevarCabsModule)
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

  // Wildcard route for a 404 page

  // {
  //   path: '',
  //   loadChildren: () => import('./demo/pages/authentication/authentication.module').then(m => m.AuthenticationModule)
  //   // component: AuthComponent,
  //   // children: [
  //   //   {
  //   //     path: 'auth',
  //   //     loadChildren: () => import('./demo/pages/authentication/authentication.module').then(module => module.AuthenticationModule)
  //   //   },
  //   //   // {
  //   //   //   path: 'maintenance',
  //   //   //   loadChildren: () => import('./demo/pages/maintenance/maintenance.module').then(module => module.MaintenanceModule)
  //   //   // }
  //   // ]
  // },
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./demo/pages/authentication/authentication.module').then(m => m.AuthenticationModule)
  // },
  // {
  //   path: 'basic',
  //   loadChildren: () => import('./demo/ui-elements/ui-basic/ui-basic.module').then(module => module.UiBasicModule)
  // },
  // {
  //   path: 'forms',
  //   loadChildren: () => import('./demo/pages/form-elements/form-elements.module').then(module => module.FormElementsModule)
  // },
  // {
  //   path: 'tbl-bootstrap',
  //   loadChildren: () => import('./demo/pages/tables/tbl-bootstrap/tbl-bootstrap.module').then(module => module.TblBootstrapModule)
  // },
  // {
  //   path: 'charts',
  //   loadChildren: () => import('./demo/pages/core-chart/core-chart.module').then(module => module.CoreChartModule)
  // },
  // {
  //   path: 'sample-page',
  //   loadChildren: () => import('./demo/pages/sample-page/sample-page.module').then(module => module.SamplePageModule)
  // },

  // {
  //   path: 'layout',
  //   canActivate: [ AuthGuardService ],
  //   loadChildren: () => import('./demo/pages/layout/layout.module').then(m => m.LayoutModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class AppRoutingModule { }
