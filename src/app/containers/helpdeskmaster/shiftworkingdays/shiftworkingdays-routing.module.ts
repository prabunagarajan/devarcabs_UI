import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from '../shiftworkingdays/add/add.component';
import { ViewComponent } from '../shiftworkingdays/view/view.component';
import { ShiftworkingdaysComponent } from './shiftworkingdays.component';


const routes: Routes = [
  { path: 'list', component: ShiftworkingdaysComponent },
  { path: 'add', component: AddComponent }, 
  { path: 'view/:id', component: ViewComponent },
  { path: 'edit/:id', component: AddComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShiftworkingdaysRoutingModule { }
