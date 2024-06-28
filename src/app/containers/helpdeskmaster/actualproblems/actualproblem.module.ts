import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { DataTablesModule } from 'angular-datatables';
import { ActualproblemsComponent } from './actualproblems.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { ActualProblemRoutingModule } from './actualprobelm-routing.module';


@NgModule({
  declarations: [ActualproblemsComponent,AddComponent,ViewComponent],
  imports: [
    CommonModule,
    ActualProblemRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class ActualProblemModule { }
