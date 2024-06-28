import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDeviceComponent } from './add-device/add-device.component';
import { DeviceAccessoriesStatusComponent } from './device-accessories-status/device-accessories-status.component';
import { ViewDeviceComponent } from './view-device/view-device.component';


const routes: Routes = [ {
  path: 'list',
  component: DeviceAccessoriesStatusComponent
},
{
  path: 'add',
  component: AddDeviceComponent
},

{
  path: 'view/:Id',
  component: ViewDeviceComponent
},
{
  path: 'edit/:id',
  component: AddDeviceComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceaccessoriesStatusRoutingModule { }
