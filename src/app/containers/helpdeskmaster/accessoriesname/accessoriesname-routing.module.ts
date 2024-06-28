import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from '../accessoriesname/add/add.component';
import { ViewComponent } from '../accessoriesname/view/view.component';
import { AccessoriesnameComponent } from './accessoriesname.component';


const routes: Routes = [
  { path: 'list', component: AccessoriesnameComponent },
  { path: 'add', component: AddComponent }, 
  { path: 'view/:Id', component: ViewComponent },
  { path: 'edit/:Id', component: AddComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessoriesnameRoutingModule { }
