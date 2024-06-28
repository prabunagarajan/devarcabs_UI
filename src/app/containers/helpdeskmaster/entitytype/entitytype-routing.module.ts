import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from '../entitytype/add/add.component';
import { ViewComponent } from '../entitytype/view/view.component';
import { EntitytypeComponent } from './entitytype.component';


const routes: Routes = [
  { path: 'list', component: EntitytypeComponent },
  { path: 'add', component: AddComponent },
  { path: 'view/:id', component: ViewComponent },
  { path: 'edit/:id', component: AddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntitytypeRoutingModule { }
