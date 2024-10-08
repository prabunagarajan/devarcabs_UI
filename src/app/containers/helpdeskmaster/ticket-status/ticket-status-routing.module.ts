import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { TicketStatusComponent} from './ticket-status.component';

const routes: Routes = [
  {
    path: 'list',
    component: TicketStatusComponent
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
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketStatusRoutingModule { }
