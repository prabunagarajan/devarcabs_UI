import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddObservationComponent } from './list-observation/add-observation/add-observation.component';
import { ListObservationComponent } from './list-observation/list-observation.component';
import { ViewObservationComponent } from './list-observation/view-observation/view-observation.component';


const routes: Routes = [  { path: 'list', component: ListObservationComponent },
{ path: 'add', component: AddObservationComponent }, 
{ path: 'view/:id', component: ViewObservationComponent },
{ path: 'edit/:id', component: AddObservationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservationRoutingModule { }
