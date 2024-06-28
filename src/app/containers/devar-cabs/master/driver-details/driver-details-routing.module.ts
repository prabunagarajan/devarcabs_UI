import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriverDetailsComponent } from './driver-details.component';
import { AddDriverDetailsComponent } from './add-driver-details/add-driver-details.component';
import { ViewDriverDetailsComponent } from './view-driver-details/view-driver-details.component';


const routes: Routes = [
  {
    path:'list',
    component:DriverDetailsComponent
  },{
    path:'add',
    component:AddDriverDetailsComponent
  },{
    path:'view/:id',
    component:ViewDriverDetailsComponent
  },{
    path:'edit/:id',
    component:AddDriverDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverDetailsRoutingModule { }
