import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from '../shiftconfiguration/add/add.component';
import { ViewComponent } from '../shiftconfiguration/view/view.component';
import { ShiftconfigurationComponent } from './shiftconfiguration.component';


const routes: Routes = [
  { path: 'list', component: ShiftconfigurationComponent },
  { path: 'add', component: AddComponent }, 
  { path: 'view/:id', component: ViewComponent },
  { path: 'edit/:id', component: AddComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShiftconfigurationRoutingModule { }
