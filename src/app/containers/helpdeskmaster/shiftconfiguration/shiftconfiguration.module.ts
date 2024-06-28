import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShiftconfigurationRoutingModule } from './shiftconfiguration-routing.module';
import { ShiftconfigurationComponent } from './shiftconfiguration.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { SharedModule } from '@app/theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [ShiftconfigurationComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    ShiftconfigurationRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class ShiftconfigurationModule { }
