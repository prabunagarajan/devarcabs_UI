import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ViewComponent } from './view/view.component';
import { ProblemsreportedComponent } from './problemsreported.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  {
    path: 'list',
    component: ProblemsreportedComponent
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
export class ProbelmReportedRoutingModule { }
