import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { DeviceHardwareNameRoutingModule } from './device-hardware-name-routing.module';
import { DeviceHardwareNameComponent } from './device-hardware-name.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [DeviceHardwareNameComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    DeviceHardwareNameRoutingModule,
    SharedModule,
    DataTablesModule,
  ]
})
export class DeviceHardwareNameModule { }
