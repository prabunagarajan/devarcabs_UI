import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteAddComponent } from './site-add/site-add.component';
import { SiteListComponent } from './site-add/site-list/site-list.component';
import { SiteViewComponent } from './site-add/site-view/site-view.component';


const routes: Routes = [  { path: 'list', component: SiteListComponent },
{ path: 'add', component: SiteAddComponent }, 
{ path: 'view/:Id', component: SiteViewComponent },
{ path: 'edit/:Id', component: SiteAddComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StieActionTakenRoutingModule { }
