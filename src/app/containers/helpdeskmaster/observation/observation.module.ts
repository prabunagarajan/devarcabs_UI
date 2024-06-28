import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservationRoutingModule } from './observation-routing.module';
import { ListObservationComponent } from './list-observation/list-observation.component';
import { AddObservationComponent } from './list-observation/add-observation/add-observation.component';
import { ViewObservationComponent } from './list-observation/view-observation/view-observation.component';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '@app/theme/shared/shared.module';


@NgModule({
  declarations: [ListObservationComponent, AddObservationComponent, ViewObservationComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    SharedModule,
    ObservationRoutingModule
  ]
})
export class ObservationModule { }
