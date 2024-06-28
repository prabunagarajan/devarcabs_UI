import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from '../subsolution/view/view.component';
import { AddComponent } from '../subsolution/add/add.component';
import { SubsolutionComponent } from './subsolution.component';


const routes: Routes = [
  { path: 'list', component: SubsolutionComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit/:Id', component: AddComponent },
  { path: 'view/:Id', component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubsolutionRoutingModule { }
