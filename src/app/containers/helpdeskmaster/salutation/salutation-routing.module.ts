import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalutationComponent } from './salutation.component';
import { AddComponent } from '../salutation/add/add.component';
import { ViewComponent } from '../salutation/view/view.component';

const routes: Routes = [
  { path: 'list', component: SalutationComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit/:id', component: AddComponent },
  { path: 'view/:Id', component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalutationRoutingModule { }
