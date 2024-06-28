import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { WorkflowComponent } from './workflow.component';
import { WorkflowRoutingModule } from './workflow-routing.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [WorkflowComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    DataTablesModule,
    WorkflowRoutingModule
  ]
})
export class WorkflowModule { }
