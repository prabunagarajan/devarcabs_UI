import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { FaqComponent } from './faq.component';


const routes: Routes = [
  {
    path: 'list',
    component: FaqComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'edit/:Id',
    component: AddComponent
  },
  {
    path: 'view/:Id',
    component: ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaqRoutingModule { }
