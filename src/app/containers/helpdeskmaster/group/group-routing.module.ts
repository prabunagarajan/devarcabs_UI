import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupComponent } from './group.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {
    path: 'list',
    component: GroupComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  
  {
    path: 'view/:Id',
    component: ViewComponent
  },
  {
    path: 'edit/:Id',
    component: AddComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
