import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceaccessoriesStatusRoutingModule } from './deviceaccessories-status-routing.module';
import { DeviceAccessoriesStatusComponent } from './device-accessories-status/device-accessories-status.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { ViewDeviceComponent } from './view-device/view-device.component';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '@app/theme/shared/shared.module';


@NgModule({
  declarations: [DeviceAccessoriesStatusComponent, AddDeviceComponent, ViewDeviceComponent],
  imports: [
    CommonModule,
    DeviceaccessoriesStatusRoutingModule,
    DataTablesModule,
    SharedModule,
  ]
})
export class DeviceaccessoriesStatusModule { }
