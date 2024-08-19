import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TripDetailsComponent } from './trip-details.component';
import { AddTripDetailsComponent } from './add-trip-details/add-trip-details.component';
import { ViewTripDetailsComponent } from './view-trip-details/view-trip-details.component';

const routes: Routes = [
  {
    path: 'list',
    component: TripDetailsComponent
  }, {
    path: 'add',
    component: AddTripDetailsComponent
  }, {
    path: 'view/:id',
    component: ViewTripDetailsComponent
  }, {
    path: 'edit/:id',
    component: AddTripDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripDetailsRoutingModule { }
