import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/theme/shared/shared.module';
import { VechileDetailsComponent } from './vechile-details.component';
import { AddVechileDetailsComponent } from './add-vechile-details/add-vechile-details.component';
import { ViewVechileDetailsComponent } from './view-vechile-details/view-vechile-details.component';
import { VechileDetailsRoutingModule } from './vechile-details-routing.module';

@NgModule({
  declarations: [
    VechileDetailsComponent,
    AddVechileDetailsComponent,
    ViewVechileDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    VechileDetailsRoutingModule
  ]
})
export class VehicledetailsModule { }