import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewprofileRoutingModule } from './viewprofile-routing.module';
import { ViewprofileComponent } from './viewprofile.component';
import { SharedModule } from '@app/theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { MainMaterialModule } from '@app/_shared/material-module';


@NgModule({
  declarations: [ViewprofileComponent],
  imports: [
    CommonModule,
    ViewprofileRoutingModule,
    SharedModule,
    DataTablesModule,
    MainMaterialModule,


  ]
})
export class ViewprofileModule { }
