import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { DataTablesModule } from 'angular-datatables';
import { ActiontakenComponent } from './actiontaken.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { ActionTakenRoutingModule } from './actiontaken-routing.module';


@NgModule({
  declarations: [ActiontakenComponent,AddComponent,ViewComponent],
  imports: [
    CommonModule,
    ActionTakenRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class ActionTakenModule { }
