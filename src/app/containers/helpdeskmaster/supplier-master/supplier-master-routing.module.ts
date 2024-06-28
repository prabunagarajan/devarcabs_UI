import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { SupplierMasterComponent } from './supplier-master.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {
    path: 'list',
    component: SupplierMasterComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'view/:id',
    component: ViewComponent
  },
  {
    path: 'edit/:Id',
    component: AddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierMasterRoutingModule { }
