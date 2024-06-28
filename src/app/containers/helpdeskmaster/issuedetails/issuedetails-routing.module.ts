import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IssuedetailsComponent } from './issuedetails.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'list', component: IssuedetailsComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit/:id', component: AddComponent },
  { path: 'view/:id', component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IssuedetailsRoutingModule { }
