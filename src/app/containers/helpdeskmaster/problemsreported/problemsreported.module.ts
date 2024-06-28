import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { DataTablesModule } from 'angular-datatables';
import { ProblemsreportedComponent } from './problemsreported.component';

import { ViewComponent } from './view/view.component';
import { ProbelmReportedRoutingModule } from './probelmsreported-routing.module';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [ProblemsreportedComponent,AddComponent,ViewComponent],
  imports: [
    CommonModule,
    ProbelmReportedRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class ProbelmReportedModule { }
