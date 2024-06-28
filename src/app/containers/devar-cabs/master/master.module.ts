import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';
import { MasterRoutingModule } from './master-routing.module';
import { DriverDetailsModule } from './driver-details/driver-details.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DriverDetailsModule,
    SharedModule,
    MasterRoutingModule
  ]
})
export class MasterModule { }
