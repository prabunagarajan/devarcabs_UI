import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from '../department/add/add.component';
import { ViewComponent } from '../department/view/view.component';
import { DepartmentComponent } from './department.component';

const routes: Routes = [
  { path: 'list', component: DepartmentComponent },
  { path: 'add', component: AddComponent },
  { path: 'view/:id', component: ViewComponent },
  {
    path: 'edit/:id',
    component: AddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
