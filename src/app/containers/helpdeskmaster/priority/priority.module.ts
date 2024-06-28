import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriorityRoutingModule } from './priority-routing.module';
import { PriorityComponent } from './priority.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '@app/theme/shared/shared.module';


@NgModule({
  declarations: [PriorityComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    PriorityRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class PriorityModule { }
