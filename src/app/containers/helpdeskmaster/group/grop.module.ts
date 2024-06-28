import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { DataTablesModule } from 'angular-datatables';
import { GroupComponent } from './group.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { GroupRoutingModule } from './group-routing.module';

@NgModule({
  declarations: [GroupComponent, AddComponent,ViewComponent],
  imports: [
    CommonModule,
    GroupRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class GroupModule { }
