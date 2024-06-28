import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { ActiontakenComponent } from './actiontaken.component';


const routes: Routes = [
  {
    path: 'list',
    component: ActiontakenComponent
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
    path: 'edit/:id',
    component: AddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActionTakenRoutingModule { }
