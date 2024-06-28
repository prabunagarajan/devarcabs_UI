import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from '../priority/view/view.component';
import { AddComponent } from '../priority/add/add.component';
import { PriorityComponent } from './priority.component';


const routes: Routes = [
  { path: 'list', component: PriorityComponent },
  { path: 'add', component: AddComponent }, 
  { path: 'view/:id', component: ViewComponent },
  { path: 'edit/:id', component: AddComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PriorityRoutingModule { }
