import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'driver-details',
    loadChildren: () => import('./driver-details/driver-details.module').then(module => module.DriverDetailsModule)
  },
  {
    path: 'vehicle-details',
    loadChildren: () => import('./vechile-details/vechile-details.module').then(module => module.VehicledetailsModule)
  },
  {
    path: 'trip-details',
    loadChildren: () => import('./trip-details/trip-details.module').then(module => module.TripDetailsModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
