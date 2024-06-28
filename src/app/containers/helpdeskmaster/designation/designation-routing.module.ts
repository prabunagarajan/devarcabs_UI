import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from '../designation/add/add.component';
import { ViewComponent } from '../designation/view/view.component';
import { DesignationComponent } from './designation.component';


const routes: Routes = [
  { path: 'list', component: DesignationComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit/:Id', component: AddComponent },
  { path: 'view/:Id', component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignationRoutingModule { }
