import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },

  {
    path: 'view-profile',
    loadChildren: () => import('./viewprofile/viewprofile.module').then(m => m.ViewprofileModule)
  },
  {
    path: 'user-management',
    loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule)
  },

  // {
  //   path: 'asset-management',
  //   loadChildren: () => import('./asset-management/asset-management.module').then(m => m.AssetManagementModule)
  // },


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpdeskRoutingModule { }
