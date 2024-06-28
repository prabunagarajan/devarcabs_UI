import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverDetailsRoutingModule } from './driver-details-routing.module';
import { SharedModule } from '@app/theme/shared/shared.module';
import { DriverDetailsComponent } from './driver-details.component';
import { AddDriverDetailsComponent } from './add-driver-details/add-driver-details.component';
import { ViewDriverDetailsComponent } from './view-driver-details/view-driver-details.component';

@NgModule({
  declarations: [DriverDetailsComponent,AddDriverDetailsComponent,ViewDriverDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    DriverDetailsRoutingModule
  ]
})
export class DriverDetailsModule { }
