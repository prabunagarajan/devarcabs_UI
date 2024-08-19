import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/theme/shared/shared.module';
import { TripDetailsComponent } from './trip-details.component';
import { AddTripDetailsComponent } from './add-trip-details/add-trip-details.component';
import { ViewTripDetailsComponent } from './view-trip-details/view-trip-details.component';
import { TripDetailsRoutingModule } from './trip-details-routing.module';

@NgModule({
  declarations: [
    TripDetailsComponent,
    AddTripDetailsComponent,
    ViewTripDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TripDetailsRoutingModule
  ]
})
export class TripDetailsModule { }