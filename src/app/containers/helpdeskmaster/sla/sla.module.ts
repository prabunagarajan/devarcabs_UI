import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { SlaRoutingModule } from './sla-routing.module';
import { SlaComponent } from './sla.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [SlaComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    DataTablesModule,
    SlaRoutingModule
  ]
})
export class SLAModule { }
