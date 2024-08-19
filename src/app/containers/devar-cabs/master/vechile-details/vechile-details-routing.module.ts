import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VechileDetailsComponent } from './vechile-details.component';
import { AddVechileDetailsComponent } from './add-vechile-details/add-vechile-details.component';
import { ViewVechileDetailsComponent } from './view-vechile-details/view-vechile-details.component';

const routes: Routes = [
  {
    path: 'list',
    component: VechileDetailsComponent
  }, {
    path: 'add',
    component: AddVechileDetailsComponent
  }, {
    path: 'view/:id',
    component: ViewVechileDetailsComponent
  }, {
    path: 'edit/:id',
    component: AddVechileDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VechileDetailsRoutingModule { }
