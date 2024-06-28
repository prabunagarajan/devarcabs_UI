import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShiftworkingdaysRoutingModule } from './shiftworkingdays-routing.module';
import { ShiftworkingdaysComponent } from './shiftworkingdays.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { SharedModule } from '@app/theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [ShiftworkingdaysComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    ShiftworkingdaysRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class ShiftworkingdaysModule { }
