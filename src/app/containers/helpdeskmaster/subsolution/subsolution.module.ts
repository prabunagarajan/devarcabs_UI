import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubsolutionRoutingModule } from './subsolution-routing.module';
import { SubsolutionComponent } from './subsolution.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { SharedModule } from '@app/theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [SubsolutionComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SubsolutionRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class SubsolutionModule { }
