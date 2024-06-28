import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { SlaComponent } from './sla.component';


const routes: Routes = [
  {
    path: 'list',
    component: SlaComponent
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
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlaRoutingModule { }
