import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { DeviceHardwareNameComponent } from './device-hardware-name.component';
const routes: Routes = [
  {
    path: 'list',
    component: DeviceHardwareNameComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'edit/:Id',
    component: AddComponent
  },
  
  {
    path: 'view/:Id',
    component: ViewComponent
  }
];

@NgModule({
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceHardwareNameRoutingModule { }
