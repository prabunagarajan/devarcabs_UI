import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteIssueTypeComponent } from './site-issue-type.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



const routes: Routes = [
  { path: 'list', component: SiteIssueTypeComponent },
  { path: 'add', component: AddComponent },
  { path: 'view/:id', component: ViewComponent },
  { path: 'edit/:id', component: AddComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteIssueTypeRoutingModule { }
